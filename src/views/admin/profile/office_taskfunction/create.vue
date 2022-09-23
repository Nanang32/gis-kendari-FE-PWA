<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form tugas dan fungsi dinas</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :departmentTask="departmentTask"
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
let departmentTask = reactive({
    title: '',
    content: ''
})

async function onSubmit(data){
  loading.value = true;
  const response = await sendRequest({
      method: 'post',
      url: '/departmentTasks',
      data: departmentTask
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-taskfunction'});
  }
  loading.value = false;
}
</script>
