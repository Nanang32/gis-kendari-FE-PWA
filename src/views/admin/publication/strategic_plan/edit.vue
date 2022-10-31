<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Produk Hukum Baru</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :strategicPlan="strategicPlan"
        @submit="onSubmit"
      ></Form>
    </div>
  </div>
</template>

<script setup>
import sendRequest from '@libs/http.js'
import Form from "./components/Form.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const loading = ref(false);
let strategicPlan = reactive({
    name: null
})

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/strategicPlans/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(strategicPlan, response.data.strategicPlan);
  }
  loading.value = false;
})

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append("_method", "PUT");
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
      method: 'POST',
      url: `/strategic-plan/${route.params.id}`,
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-strategic-plan'});
  }
  loading.value = false;
}
</script>