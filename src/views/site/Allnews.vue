<template>
<div class="text-gray-700">
    <Navbar> </Navbar>
    <TinySlider />
    <main id="content">
        <!-- advertisement -->
        <div class="bg-gray-50 py-4 hidden">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div class="mx-auto table text-center text-sm">
                    <a class="uppercase" href="#">Advertisement</a>
                    <a href="#">
                        <img src="@/assets/img/ads/ads_728.jpg" alt="advertisement area">
                    </a>
                </div>
            </div>
        </div>
        <AllImageList />
        <AllPostList />
        <AllVideoList />
        <!-- block news -->
    </main>
    <Footer></Footer>
        
    </div>
</template>

<script setup>
    import TinySlider from '@/components/tiny-slider/Main.vue'
    import Navbar from "../../components/navbar-menu/Main.vue";
    import Footer from "../../components/footer-public/Main.vue";
    import AllImageList from './components/AllImageList.vue';
    import AllPostList from './components/AllPostList.vue';
    import AllVideoList from './components/AllVideoList.vue';
</script>

<style scoped>
    @import "./style.css";
</style>