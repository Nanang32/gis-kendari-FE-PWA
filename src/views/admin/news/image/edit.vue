<template>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :image="image"
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
const router = useRouter();
const route = useRoute();
const loading = ref(false);
let image = reactive({});

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/images/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(image, response.data.image);
  }
  loading.value = false;
})

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('_method', 'PUT')
  formdata.append('title', image.title)
  formdata.append('description', image.description)
  formdata.append('image_file', image.image_file)
  image.categories.forEach(category_id => {
    formdata.append('category_ids[]', category_id)
  });
  const response = await sendRequest({
      method: 'post',
      url: `/images/${route.params.id}`,
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-image'});
  }
  loading.value = false;
}
</script>
