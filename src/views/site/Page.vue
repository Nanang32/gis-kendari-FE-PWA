<template>
    <div class="text-gray-700">
        <Navbar />
        <main id="content">
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-3/3  overflow-hidden">
                            <div class="w-full py-3 mb-3">
                                <h2 class="text-gray-800 text-3xl font-bold">
                                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Berita terkini
                                </h2>
                            </div>
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="max-w-full w-full px-4">
                                    <!-- Post content -->
                                    <div class="leading-relaxed pb-4">
                                        <h2 class="w-full float-left text-xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">Judul Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore</h2>
                                        <figure class="text-center mb-6">
                                            <img class="max-w-full w-full lg:w-3/3 h-52" src="@/assets/img/dummy/post1.jpg" alt="Image description">
                                            <figcaption> Type here your description</figcaption>
                                        </figure>
                                        <h3 class="text-2xl leading-normal mb-2 font-semibold text-gray-800 dark:text-gray-100">Ordered and unordered list</h3>
                                        <p class="mb-5"><a class="font-bold"> Sultra </a> - Cras justo velit, ultrices vel vehicula eu, viverra in turpis. Donec lobortis at lorem ac semper. Mauris malesuada ligula in interdum pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                        <p class="mb-5">Integer egestas ipsum eget metus sodales consectetur. Nullam ultricies posuere cursus. Duis vitae lorem porta, venenatis nibh ac, laoreet massa. Nam risus lacus, porta eu diam id, fringilla porta risus. Aenean sit amet malesuada diam.</p>
                                        <p class="mb-5">Vivamus purus orci, molestie vel erat sed, consectetur posuere ligula. Vestibulum <br> iaculis dignissim laoreet. Cras tincidunt always have Paris, at lobortis ligula laoreet. Etiam eu sapien sit amet neque aliquam consequat nec in velit. Aliquam sit amet erat sed augue bibendum vehicula non at lacus. Phasellus scelerisque in elit a els.</p>
                                        <p class="mb-5">Cras justo velit, ultrices vel vehicula eu, viverra in turpis. Donec lobortis at lorem ac semper. Mauris malesuada ligula in interdum pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
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
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
</script>
<style scoped>
    @import "./style.css";
</style>