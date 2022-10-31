<template>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :strategicPlan="strategicPlan"
        @submit="onSubmit"
        @fileChange="onFileChange"
      ></Form>
    </div>
  </div>
</template>

<script setup>
import sendRequest from '@libs/http.js'
import Form from "./components/Form.vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
const router = useRouter();
const loading = ref(false);
let strategicPlan = reactive({});
const image = ref('');
const onFileChange = (e) => {
  image.value = e.target.files[0];
};

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  Object.keys(strategicPlan).forEach(key => {
      if(key === 'category_ids'){
        strategicPlan['category_ids'].forEach(function(categoryId){
          formdata.append('category_ids[]', categoryId);
        });
      }
      else
        formdata.append(key, strategicPlan[key]);
  });
  const response = await sendRequest({
      method: 'post',
      url: '/strategicPlans',
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-strategic-plan'});
  }
  loading.value = false;
}
</script>
