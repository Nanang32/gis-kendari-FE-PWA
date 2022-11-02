<template>
    <div class="text-gray-700">
        <Navbar />
        <TinySlider />
        <main id="content">
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-3/3  overflow-hidden">
                            <div class="w-full py-3 mb-3">
                                <h2 class="text-gray-800 text-3xl font-bold">
                                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Detail informasi
                                </h2>
                            </div>
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="max-w-full w-full px-4">
                                    <!-- Post content -->
                                    <div class="leading-relaxed pb-4" >
                                        <h2 class="w-full float-left text-xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">
                                            {{ title }}</h2>
                                        <figure class="text-center mb-6">
                                            <img class="max-w-full w-full lg:w-3/3 h-52" :src="image_url">
                                        </figure>
                                        <div v-html="content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main><!-- end main -->
        <Footer />
    </div>
</template>
<script setup>
import sendRequest from '@libs/http.js'
import TinySlider from '@/components/tiny-slider/Main.vue';
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
const route = useRoute();
const loading = ref(false);
const title = ref(null);
const image_url = ref(null);
const content = ref(null);

onMounted(async () => {
  loading.value = true;
  if(route.name === 'site-post')
    loadPost();
  if(route.name === 'site-image')
    loadImage();
  loading.value = false;
})


async function loadPost(){
  const response = await sendRequest({
      method: 'GET',
      url: `/posts/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    title.value = response.data.post.title
    image_url.value = response.data.post.featured_image_url
    content.value = response.data.post.content
  }
}
async function loadImage(){
  const response = await sendRequest({
      method: 'get',
      url: `/images/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    title.value = response.data.image.title
    image_url.value = response.data.image.image_url
    content.value = response.data.image.description
  }
}

</script>
<style scoped>
    @import "./style.css";
</style>