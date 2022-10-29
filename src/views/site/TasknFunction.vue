<template>
    <div class="text-gray-700 pt-9 sm:pt-10">
        <Navbar />
        <main id="content">
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden">
                            
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="flex-shrink max-w-full w-full px-3">
                                    <div class="p-4 border border-gray-100 bg-white mb-4">
                                        <div class="flex flex-row items-center">
                                            <div class="rounded-md object-cover overflow-hidden">
                                                <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/tugasfungsi.png" alt="author"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- component -->
                                <div class="py-16 bg-white">
                                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                            <div class="md:7/12 lg:w-3/3">
                                                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Tugas & Fungsi</h2>
                                                <p class="mt-6 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>
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
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
</script>
<style scoped>
    @import "./style.css";
</style>