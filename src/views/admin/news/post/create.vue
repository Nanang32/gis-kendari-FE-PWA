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
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
const router = useRouter();
const loading = ref(false);
let post = reactive({});

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('title', post.title)
  formdata.append('content', post.content)
  formdata.append('featured_image_file', post.featured_image_file)
  post.categories.forEach(category_id => {
    formdata.append('category_ids[]', category_id)
  });
  const response = await sendRequest({
      method: 'post',
      url: '/posts',
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-post'});
  }
  loading.value = false;
}
</script>
