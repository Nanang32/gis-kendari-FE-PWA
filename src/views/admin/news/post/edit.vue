<template>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :post="post"
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
let post = reactive({});

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/posts/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(post, response.data.post);
  }
  loading.value = false;
})

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('_method', 'PUT')
  formdata.append('title', post.title)
  formdata.append('content', post.content)
  formdata.append('featured_image_file', post.featured_image_file)
  post.categories.forEach(category_id => {
    formdata.append('category_ids[]', category_id)
  });
  const response = await sendRequest({
      method: 'post',
      url: `/posts/${route.params.id}`,
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-post'});
  }
  loading.value = false;
}
</script>
