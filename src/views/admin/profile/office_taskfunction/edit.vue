<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form pembaruan tugas dan fungsi dinas</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-6">
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
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const loading = ref(false);
let departmentTask = reactive({
    name: null
})

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/departmentTasks/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(departmentTask, response.data.departmentTask);
  }
  loading.value = false;
})

async function onSubmit(){
  loading.value = true;
  const response = await sendRequest({
      method: 'PUT',
      url: `/departmentTasks/${route.params.id}`,
      data: departmentTask
  });
  loading.value = false;
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-taskfunction'});
  }
}
</script>
