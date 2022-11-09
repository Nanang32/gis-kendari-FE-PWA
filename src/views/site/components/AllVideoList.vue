<template>
  <div class="bg-gray-50 py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <div class="flex flex-row flex-wrap">
            <!-- Left -->
            <div class="flex-shrink max-w-full w-full lg:w-3/3  overflow-hidden">
                <div class="w-full py-3">
                    <h2 class="text-gray-800 text-2xl font-bold">
                        <span class="inline-block h-5 border-l-8 border-red-600 mr-2"></span>Dokumentasi Video
                    </h2>
                </div>
                <div class="flex flex-row flex-wrap -mx-3">
                    <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100" v-for="video in videos">
                        <div class="flex flex-row sm:block hover-img">
                            <a href="">
                              <iframe class="max-w-full w-full mx-auto" :src="getEmbedLink(video.youtube_url)" frameborder="0" allowfullscreen></iframe>
                            </a>
                            <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                <h3 class="text-lg font-bold leading-tight mb-2">
                                    <a href="#">{{ video.title }}</a>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
                <Paginator :page="page" :perPage="perPage" :lastPage="lastPage" @goToPage="setPage" />
            </div>
            <!-- right -->
        </div>
    </div>
</div>
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
  import { ref, onMounted } from "vue";
  import sendRequest from '@libs/http.js'

  const videos = ref([]);
  const loading = ref(true);
  const lastPage = ref(1);

  async function loadData(page=1){
    loading.value = true;
    const response = await sendRequest({
        method: 'get',
        url: '/videos',
        params: {
          page: page,
          perPage: 9
        },
    });
    if ((response !== null) && (response.status === true)) {
      videos.value = response.data.videos.data
      lastPage.value = response.data.videos.last_page
    }
    loading.value = false;
  }

  onMounted(async () => {
    await loadData()
  });

  function getEmbedLink(youtubeLink){
      var res = youtubeLink.split("=");
      return "https://www.youtube.com/embed/"+res[1];
  }
</script>
