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
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const router = useRouter();
const route = useRoute();
const loading = ref(false);
let video = reactive({});

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/videos/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(video, response.data.video);
  }
  loading.value = false;
})

async function onSubmit(data){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('_method', 'PUT')
  formdata.append('title', video.title)
  formdata.append('content', video.content)
  formdata.append('youtube_url', video.youtube_url)
  video.categories.forEach(category_id => {
    formdata.append('category_ids[]', category_id)
  });
  const response = await sendRequest({
      method: 'post',
      url: `/videos/${route.params.id}`,
      data: formdata
  });
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-video'});
  }
  loading.value = false;
}
</script>
