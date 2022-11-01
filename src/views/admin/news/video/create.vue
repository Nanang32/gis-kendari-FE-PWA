<template>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :video="video"
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
let video = reactive({});

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('title', video.title)
  formdata.append('content', video.content)
  formdata.append('youtube_url', video.youtube_url)
  video.categories.forEach(category_id => {
    formdata.append('category_ids[]', category_id)
  });
  const response = await sendRequest({
      method: 'post',
      url: '/videos',
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-video'});
  }
  loading.value = false;
}
</script>
