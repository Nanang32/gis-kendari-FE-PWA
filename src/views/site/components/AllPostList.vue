<template>
  <div class="bg-white">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
            <!-- Left -->
            <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden" >
                <div class="w-full py-3">
                    <h2 class="text-gray-800 text-2xl font-bold">
                        <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Berita Terkini
                    </h2>
                </div>
                <div class="flex flex-row flex-wrap -mx-3">
                    <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100" v-for="post in posts">
                        <div class="flex flex-row sm:block hover-img" @click="router.push({name: 'site-post', params: { id: post.id }})">
                            <a href="">
                                <img class="max-w-full w-full mx-auto" :src="post.featured_image_url" alt="alt title">
                            </a>
                            <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 class="text-lg font-bold leading-tight mb-2">
                                    <a href="#">{{ post.title}}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import sendRequest from '@libs/http.js'
  import { useRouter } from "vue-router";

  const posts = ref([]);
  const loading = ref(true);
  const lastPage = ref(1);
  const router = useRouter();

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
