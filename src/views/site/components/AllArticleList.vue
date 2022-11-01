<template>
  <div class="bg-white py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <!-- big grid 1 -->
        <div class="flex flex-row flex-wrap">
            <!--Start box news-->
            <div class="flex-shrink max-w-full w-full">
                <div class="box-one flex flex-row flex-wrap">
                    <article class="flex-shrink max-w-full w-full sm:w-1/2" v-for="post in posts">
                        <div class="relative hover-img max-h-48 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" :src="post.featured_image_url" alt="Image description">
                            </a>
                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{ post.title }}</h2>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import sendRequest from '@libs/http.js'

const posts = ref([]);
const loading = ref(true);
const lastPage = ref(1);

async function loadData(page=1){
  loading.value = true;
  const response = await sendRequest({
      method: 'get',
      url: '/posts',
      params: {
        page: page
      },
  });
  if ((response !== null) && (response.status === true)) {
    posts.value = response.data.posts.data
    lastPage.value = response.data.posts.last_page
  }
  loading.value = false;
}

onMounted(async () => {
  await loadData()
});
</script>
