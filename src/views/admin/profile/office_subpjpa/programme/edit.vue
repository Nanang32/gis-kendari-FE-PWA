<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form pembaruan Program kerja</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :formData="formData"
        @submit="onSubmit"
      ></Form>
    </div>
  </div>
</template>

<script setup>
import sendRequest from '@libs/http.js'
import Form from "@/components/form-editor/Main.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const loading = ref(false);
let formData = reactive({
    title: null,
    content: ''
})

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/workingProgram/pjpa/${route.params.id}`,
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(formData, response.data.workingProgram);
  }
  loading.value = false;
})

async function onSubmit(){
  loading.value = true;
  const response = await sendRequest({
      method: 'PUT',
      url: `/workingProgram/pjpa/${route.params.id}`,
      data: formData
  });
  loading.value = false;
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-pjpa'});
  }
}
</script>