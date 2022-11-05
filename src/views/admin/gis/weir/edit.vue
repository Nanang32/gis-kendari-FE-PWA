<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form Kategori</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12">
      <Form
        :loading="loading"
        :weir="weir"
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
let weir = reactive({
    name: null
})

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/weirs/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(weir, response.data.weir);
    weir.geo_json = JSON.stringify(weir.geo_json);
  }
  loading.value = false;
})

async function onSubmit(){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('_method', 'PUT')
  Object.keys(weir).forEach(key => {
    if(weir[key])
      formdata.append(key, weir[key]);
  });
  const response = await sendRequest({
      method: 'PUT',
      url: `/weirs/${route.params.id}`,
      data: formdata
  });
  loading.value = false;
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-weir'});
  }
}
</script>
