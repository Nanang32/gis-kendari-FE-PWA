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
                        <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden">
                            <div class="w-full py-3">
                                <h2 class="text-gray-800 text-2xl font-bold">
                                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> UPTD LABORATORIUM
                                </h2>
                            </div>
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="flex-shrink max-w-full w-full px-3">
                                    <div class="p-4 border border-gray-100 bg-white mb-4">
                                        <div class="flex flex-row items-center">
                                            <div class="rounded-md object-cover overflow-hidden">
                                                <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/back2.png" alt="author"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-shrink max-w-full w-full px-3">
                                    <div class="p-4 border border-gray-100 bg-white mb-4">
                                        <div class="flex flex-row items-center">
                                            <div class="rounded-full overflow-hidden">
                                                <a href="#"><img class="border max-w-full w-20 sm:w-32" src="@/assets/images/logosultra.png" alt="author"></a>
                                            </div>
                                            <div class="ml-8">
                                                <!--name-->
                                                <h4 class="text-2xl">
                                                    <span class="font-bold">UPTD LABOROTORIUM SDABM</span>
                                                </h4>
                                                <p class="hidden sm:block font-medium">
                                                HUBUNGI KAMI <br>
                                                No. Tlp : <br>
                                                022 7562049 <br>
                                                Email : <br>
                                                admin-esdm@jabarprov.go.id</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- component -->
                                <div class="py-16 bg-white">
                                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                            <div class="md:7/12 lg:w-6/12">
                                                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>UPTD Laboratoriums</h2>
                                                <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            <div class="md:5/12 lg:w-5/12">
                                                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-shrink max-w-full w-full px-3">
                                    <div class="w-full py-3">
                                        <h2 class="text-gray-800 text-2xl font-bold">
                                            <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> Tab Menu
                                        </h2>
                                    </div>
                                    <TabGroup>
                                        <TabList class="nav-boxed-tabs">
                                            <Tab class="w-full py-2" tag="button">Pengujian Aspal</Tab>
                                            <Tab class="w-full py-2" tag="button">Pengujian Beton</Tab>
                                            <Tab class="w-full py-2" tag="button">Pengujian Agregat</Tab>
                                            <Tab class="w-full py-2" tag="button">Pengujian Tanah</Tab>
                                            <Tab class="w-full py-2" tag="button">Penyewaan alat Lab & lapangan</Tab>
                                        </TabList>
                                        <TabPanels class="mt-5">
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12">
                                                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>UPTD Laboratoriums</h2>
                                                            <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12">
                                                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>UPTD Laboratoriums</h2>
                                                            <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12">
                                                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>UPTD Laboratoriums</h2>
                                                            <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12">
                                                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>UPTD Laboratoriums</h2>
                                                            <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12">
                                                            <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>UPTD Laboratoriums</h2>
                                                            <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabPanels>
                                    </TabGroup>
                                </div>
                                <div class="w-full   bg-green-600 shadow-xl shadow-green-200 py-10 px-20 flex justify-between items-center">
                                    <p class=" text-white capitalize"> <span class="text-4xl font-medium">info</span> <br> <span class="text-lg ">Tarif pengujian di UPTD laborotorium SDABM</span></p>
                                    <button class="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400">CEK DISINI </button>
                                </div>
                            </div>
                        </div>
                        <!-- right -->
                    </div>
                </div>
            </div>
        </main><!-- end main -->
        <Footer />
    </div>
</template>
<script setup>
import TinySlider from '@/components/tiny-slider/Main.vue';
    
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
</script>
<style scoped>
    @import "./style.css";
</style>