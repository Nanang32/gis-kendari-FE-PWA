<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Produk Hukum Baru</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :lawDocument="lawDocument"
        @submit="onSubmit"
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
let lawDocument = reactive({
    name: null
})

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  Object.keys(lawDocument).forEach(key => {
      if(key === 'category_ids'){
        lawDocument['category_ids'].forEach(function(categoryId){
          formdata.append('category_ids[]', categoryId);
        });
      }
      else
        formdata.append(key, lawDocument[key]);
  });
  const response = await sendRequest({
      method: 'post',
      url: '/laws',
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-law-document'});
  }
  loading.value = false;
}
</script>
