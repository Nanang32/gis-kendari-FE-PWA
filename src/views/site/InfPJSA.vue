<template>
    <div class="text-gray-700">
        <Navbar />
        <main id="content">
            <div class="flex flex-row items-center">
                <div class="rounded-md object-cover overflow-hidden">
                    <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/prodpjsa.jpg" alt="author"></a>
                </div>
            </div>
            <!-- component -->
            <div class="flex items-center justify-center mt-16 mb-16">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    <!-- 1 card -->
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                            <!-- svg  -->
                            <img class=" w-8 mx-auto h-8" src="@/assets/images/river.png" alt="Image description">
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2 pl-28">Wilayah Sungai</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-40">
                                <p class="">3</p>
                            </div>
                            <div class="border-t-2"></div>
                            <p class="text-xl font-semibold my-2 pl-32">Luas (Km<sup>2</sup>)</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-28">
                                <p class="">11.523</p>
                            </div>
                        </div>
                    </div>
                    <!-- 2 card -->
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                            <img class=" w-8 mx-auto h-8" src="@/assets/images/river.png" alt="Image description">
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2 pl-24">Daerah aliran sungai</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-40">
                                <p class="">385</p>
                            </div>
                            <div class="border-t-2"></div>
                            <p class="text-xl font-semibold my-2 pl-32">Luas (Km<sup>2</sup>)</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-28">
                                <p class="">10.930</p>
                            </div>
                        </div>
                    </div>
                    <!-- 3 card -->
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                            <img class=" w-8 mx-auto h-8" src="@/assets/images/river.png" alt="Image description">
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2 pl-28">Sungai utama</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-36">
                                <p class="">333</p>
                            </div>
                            <div class="border-t-2"></div>
                            <p class="text-xl font-semibold my-2 pl-32">Panjang (M)</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-32">
                                <p class="">3.471</p>
                            </div>
                        </div>
                    </div>
                    <!-- 4 card -->
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                            <img class=" w-8 mx-auto h-8" src="@/assets/images/river.png" alt="Image description">
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2 pl-28">Normalisasi sungai</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-40">
                                <p class="">56</p>
                            </div>
                            <div class="border-t-2"></div>
                            <p class="text-xl font-semibold my-2 pl-28">Panjang total (M)</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-28">
                                <p class="">26.948</p>
                            </div>
                        </div>
                    </div>
                    <!-- 5 card -->
                    <div class="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
                        <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
                            <img class=" w-8 mx-auto h-8" src="@/assets/images/river.png" alt="Image description">
                        </div>
                        <div class="mt-8">
                            <p class="text-xl font-semibold my-2 pl-28">Pengaman pantai</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-40">
                                <p class="">36</p>
                            </div>
                            <div class="border-t-2"></div>
                            <p class="text-xl font-semibold my-2 pl-28">Panjang total (M)</p>
                            <div class="flex space-x-2 text-gray-600 font-bold text-4xl text-center pl-28">
                                <p class="">3.236</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
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