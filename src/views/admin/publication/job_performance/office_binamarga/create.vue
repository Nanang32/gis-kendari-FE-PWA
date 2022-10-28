<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto capitalize">Form Kinerja pekerjaan Bina marga</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-6">
      <Form
        :loading="loading"
        :jobperformbinamarga="jobperformbinamarga"
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
let jobperformbinamarga = reactive({
    name: null
})

async function onSubmit(data){
  loading.value = true;
  const response = await sendRequest({
      method: 'post',
      url: '/categories',
      data: jobperformbinamarga
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-jobperformbinamarga'});
  }
  loading.value = false;
}
</script>
