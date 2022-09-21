<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Register organisasi dinas</h2>
    
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :departmentOrganization="departmentOrganization"
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
let departmentOrganization = reactive({
    title: null
})
const image = ref('');
const onFileChange = (e) => {
  image.value = e.target.files[0];
};
async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('content', image.value)
  formdata.append('title', departmentOrganization.title)
  const response = await sendRequest({
      method: 'post',
      url: '/departmentOrganizations',
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-structure'});
  }
  loading.value = false;
}
</script>
