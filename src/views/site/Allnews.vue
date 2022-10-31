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
        <!-- hero big grid -->
        <div class="bg-white py-6">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <!-- big grid 1 -->
                <div class="flex flex-row flex-wrap">
                    <!--Start left cover-->
                    <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                        <div class="relative hover-img max-h-98 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="@/assets/img/dummy/img1.jpg" alt="Image description">
                            </a>
                            <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                <a href="#">
                                    <h2 class="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                                </a>
                                <p class="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                                <div class="pt-2">
                                    <div class="text-gray-100">
                                        <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Berita Terkini
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--Start box news-->
                    <div class="flex-shrink max-w-full w-full lg:w-1/2">
                        <div class="box-one flex flex-row flex-wrap">
                            <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                <div class="relative hover-img max-h-48 overflow-hidden">
                                    <a href="#">
                                        <img class="max-w-full w-full mx-auto h-auto" src="@/assets/img/dummy/img2.jpg" alt="Image description">
                                    </a>
                                    <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                        <a href="#">
                                            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">News magazines are becoming obsolete, replaced by gadgets</h2>
                                        </a>
                                        <div class="pt-1">
                                            <div class="text-gray-100">
                                                <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Berita Terkini
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                <div class="relative hover-img max-h-48 overflow-hidden">
                                    <a href="#">
                                        <img class="max-w-full w-full mx-auto h-auto" src="@/assets/img/dummy/img3.jpg" alt="Image description">
                                    </a>
                                    <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                        <a href="#">
                                            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Minimalist designs are starting to be popular with the next generation</h2>
                                        </a>
                                        <div class="pt-1">
                                            <div class="text-gray-100">
                                                <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Berita Terkini
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                <div class="relative hover-img max-h-48 overflow-hidden">
                                    <a href="#">
                                        <img class="max-w-full w-full mx-auto h-auto" src="@/assets/img/dummy/img4.jpg" alt="Image description">
                                    </a>
                                    <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                        <a href="#">
                                            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Tips for decorating the interior of the living room</h2>
                                        </a>
                                        <div class="pt-1">
                                            <div class="text-gray-100">
                                                <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Berita Terkini
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="flex-shrink max-w-full w-full sm:w-1/2">
                                <div class="relative hover-img max-h-48 overflow-hidden">
                                    <a href="#">
                                        <img class="max-w-full w-full mx-auto h-auto" src="@/assets/img/dummy/img5.jpg" alt="Image description">
                                    </a>
                                    <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                                        <a href="#">
                                            <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">Online taxi users are increasing drastically ahead of the new year</h2>
                                        </a>
                                        <div class="pt-1">
                                            <div class="text-gray-100">
                                                <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Berita Terkini
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- block news -->
        <div class="bg-white">
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div class="flex flex-row flex-wrap">
                    <!-- Left -->
                    <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden">
                        <div class="w-full py-3">
                            <h2 class="text-gray-800 text-2xl font-bold">
                                <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Berita Terkini
                            </h2>
                        </div>
                        <div class="flex flex-row flex-wrap -mx-3">
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img6.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img7.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img8.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img9.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img10.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img11.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        
        <!-- block news -->
        <div class="bg-gray-50 py-6">
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
                                    <!--thumbnail-->
                                    <a href="#">
                                        <img class="max-w-full w-full mx-auto h-auto" src="@/assets/img/dummy/img2.jpg" alt="Image description">
                                    </a>
                                    <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                                        <!--title-->
                                        <a href="#">
                                            <h2 class="text-3xl font-bold capitalize text-white mb-3">Amazon Shoppers Are Ditching Designer Belts for This Best-Selling</h2>
                                        </a>
                                        <p class="text-gray-100 hidden sm:inline-block">This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..</p>
                                        <!-- author and date -->
                                        <div class="pt-2">
                                            <div class="text-gray-100">
                                                <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Berita Terkini
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img27.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img3.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img4.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img5.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img6.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                                <div class="flex flex-row sm:block hover-img">
                                    <a href="">
                                        <img class="max-w-full w-full mx-auto" src="@/assets/img/dummy/img7.jpg" alt="alt title">
                                    </a>
                                    <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                                        <h3 class="text-lg font-bold leading-tight mb-2">
                                            <a href="#">5 Tips to Save Money Booking Your Next Hotel Room</a>
                                        </h3>
                                        <p class="hidden md:block text-gray-600 leading-tight mb-1">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                        <a class="text-gray-500" href="#"><span class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Berita Terkini</a>
                                    </div>
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
import TinySlider from '@/components/tiny-slider/Main.vue'
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
</script>

<style scoped>
    @import "./style.css";
</style>