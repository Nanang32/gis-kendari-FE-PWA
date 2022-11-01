<template>
  <div class="bg-white py-6">
    <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
        <!-- big grid 1 -->
        <div class="flex flex-row flex-wrap">
            <!--Start box news-->
            <div class="flex-shrink max-w-full w-full">
                <div class="box-one flex flex-row flex-wrap">
                    <article class="flex-shrink max-w-full w-full sm:w-1/2" v-for="image in images">
                        <div class="relative hover-img max-h-48 overflow-hidden" @click="router.push({name: 'site-image', params: { id: image.id }})">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" :src="image.image_url" alt="Image description">
                            </a>
                            <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{ image.title }}</h2>
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
import { useRouter } from "vue-router";

const images = ref([]);
const loading = ref(true);
const lastPage = ref(1);
const router = useRouter();

async function loadData(page=1){
  loading.value = true;
  const response = await sendRequest({
      method: 'get',
      url: '/images',
      params: {
        page: page
      },
  });
  if ((response !== null) && (response.status === true)) {
    images.value = response.data.images.data
    lastPage.value = response.data.images.last_page
  }
  loading.value = false;
}

onMounted(async () => {
  await loadData()
});
</script>
