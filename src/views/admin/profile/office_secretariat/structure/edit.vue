<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form Pembaruan sekertariat</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :formData="formData"
        @submit="onSubmit"
        @fileChange="onFileChange"
      ></Form>
    </div>
  </div>
</template>

<script setup>
import sendRequest from '@libs/http.js'
import Form from "@/components/form-image/Main.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const loading = ref(false);
let formData = reactive({
    title: null,
})
const image = ref('');
const onFileChange = (e) => {
  image.value = e.target.files[0];
};

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/organizationDiagram/sekretariat-dinas/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(formData, response.data.organizationDiagram);
  }
  loading.value = false;
})

async function onSubmit(){
  loading.value = true;
  const formFileData = new FormData();
  formFileData.append('title', formData.title)
  formFileData.append('file', image.value)
  formFileData.append('_method', 'PUT')
  const response = await sendRequest({
      method: 'POST',
      url: `/organizationDiagram/sekretariat-dinas/${route.params.id}`,
      data: formFileData
  });
  loading.value = false;
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-secretariat'});
  }
}
</script>

