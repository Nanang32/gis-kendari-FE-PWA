<template>
    <div class="bg-white py-6" v-if="!loading">
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="w-full py-3">
                <h2 class="text-gray-800 text-2xl font-bold capitalize">
                    <span class="inline-block h-5 border-l-8 border-red-600 mr-2"></span>Dokumentasi foto
                </h2>
            </div>
            <!-- big grid 1 -->
            <div class="flex flex-row flex-wrap">
                <!--Start left cover-->
                <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1" v-if="images[0]" @click="router.push({name: 'site-image', params: { id: images[0].id }})">
                    <div class="relative hover-img max-h-98 overflow-hidden">
                        <a href="#">
                            <img class="max-w-full w-full mx-auto h-auto" :src="images[0]['image_url']">
                        </a>
                        <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                            <h2 class="text-3xl font-bold capitalize text-white mb-3">{{ images[0]['title'] }}</h2>
                        </div>
                    </div>
                </div>
                <!--Start box news-->
                <div class="flex-shrink max-w-full w-full lg:w-1/2">
                    <div class="box-one flex flex-row flex-wrap">
                        <article class="flex-shrink max-w-full w-full sm:w-1/2" v-if="images[1]" @click="router.push({name: 'site-image', params: { id: images[1].id }})">
                            <div class="relative hover-img max-h-48 overflow-hidden m-1">
                                <a href="#">
                                    <img class="max-w-full w-full mx-auto h-auto" :src="images[1]['image_url']">
                                </a>
                                <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{ images[1]['title'] }}</h2>
                                </div>
                            </div>
                        </article>
                        <article class="flex-shrink max-w-full w-full sm:w-1/2" v-if="images[2]" @click="router.push({name: 'site-image', params: { id: images[2].id }})">
                            <div class="relative hover-img max-h-48 overflow-hidden m-1">
                                <a href="#">
                                    <img class="max-w-full w-full mx-auto h-auto" :src="images[2]['image_url']">
                                </a>
                                <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{ images[2]['title'] }}</h2>
                                </div>
                            </div>
                        </article>
                        <article class="flex-shrink max-w-full w-full sm:w-1/2" v-if="images[3]" @click="router.push({name: 'site-image', params: { id: images[3].id }})">
                            <div class="relative hover-img max-h-48 overflow-hidden m-1">
                                <a href="#">
                                    <img class="max-w-full w-full mx-auto h-auto" :src="images[3]['image_url']">
                                </a>
                                <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{ images[3]['title'] }}</h2>
                                </div>
                            </div>
                        </article>
                        <article class="flex-shrink max-w-full w-full sm:w-1/2" v-if="images[4]" @click="router.push({name: 'site-image', params: { id: images[4].id }})">
                            <div class="relative hover-img max-h-48 overflow-hidden m-1">
                                <a href="#">
                                    <img class="max-w-full w-full mx-auto h-auto" :src="images[4]['image_url']">
                                </a>
                                <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                    <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">{{ images[4]['title'] }}</h2>
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

async function loadData(page = 1) {
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