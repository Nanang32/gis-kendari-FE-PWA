<template>
<div class="text-gray-700">
    <Navbar> </Navbar>
    <TinySlider />
    <main id="content">
        <!-- hero big grid -->
        <ArticleList />
        <ImageList />
        <div class="bg-gray-50 py-6" v-if="!loading">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div class="flex flex-row flex-wrap">
                    <!-- Left -->
                    <div class="flex-shrink max-w-full w-full lg:w-3/3  overflow-hidden">
                        <div class="w-full py-3">
                            <h2 class="text-gray-800 text-2xl font-bold">
                                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Dokumentasi Video
                            </h2>
                        </div>
                        <div class="flex flex-row flex-wrap -mx-3">
                            <div class="flex-shrink max-w-full w-full px-3 pb-5">
                                <div class="relative hover-img max-h-98 overflow-hidden">
                                    <iframe width="420" height="345" :src="getEmbedLink(videos[0].youtube_url)" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- right -->
                    
                </div>
            </div>
        </div>
    </main>
    <Footer></Footer>
        
    </div>
</template>

<script setup>
    import ArticleList from './components/ArticleList.vue';
    import ImageList from './components/ImageList.vue';
    import TinySlider from '@/components/tiny-slider/Main.vue';
    import Navbar from "../../components/navbar-menu/Main.vue";
    import Footer from "../../components/footer-public/Main.vue";

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
            page: page
            },
        });
        if ((response !== null) && (response.status === true)) {
            videos.value = response.data.videos.data
            lastPage.value = response.data.videos.last_page
        }
        loading.value = false;
    }
    
    onMounted(async () => {
        loadData()
    });

    function getEmbedLink(youtubeLink){
        var res = youtubeLink.split("=");
        return "https://www.youtube.com/embed/"+res[1];
    }
</script>

<style scoped>
    @import "./style.css";
</style>