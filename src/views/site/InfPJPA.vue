<template>
<div class="text-gray-700">
    <Navbar/>
    <main id="content">
        
        <!-- hero big grid -->
        <div class="bg-white py-6">
            
            <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                <div class="w-full py-3">
                        <h2 class="text-gray-800 text-3xl font-bold">
                            <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Informasi PJPA (Info grafis)
                        </h2>
                    </div>
                <!-- big grid 1 -->
                <div class="flex flex-row flex-wrap">
                    <!--Start left cover-->
                    <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                        <div class="relative hover-img max-h-98 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="@/assets/images/irigation.jpeg" alt="Image description">
                            </a>
                            <div class="absolute px-5 pt-8 pb-20 bottom-0 w-full bg-gradient-cover">
                                <a href="#" class="text-center">
                                    <h2 class="text-6xl font-bold capitalize text-white">30</h2>
                                    <h3 class="text-2xl font-bold capitalize text-white mb-3">daerah irigasi</h3>
                                </a>
                                <p class="text-gray-100 hidden sm:inline-block capitalize">Daerah irigasi adalah kesatuan lahan yang mendapat air dari satu jaringan irigasi. 12. Jaringan irigasi adalah saluran, bangunan, dan bangunan pelengkapnya yang merupakan satu kesatuan yang diperlukan untuk penyediaan, pembagian, pemberian, penggunaan, dan pembuangan air irigasi.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1 mb-3">
                        <div class="relative hover-img max-h-98 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="@/assets/images/irigation.jpeg" alt="Image description">
                            </a>
                            <div class="absolute px-5 pt-8 pb-20 bottom-0 w-full bg-gradient-cover">
                                <a href="#" class="text-center">
                                    <h2 class="text-6xl font-bold capitalize text-white">52.640</h2>
                                    <h3 class="text-2xl font-bold capitalize text-white mb-3">Luas (Hektar)</h3>
                                </a>
                                <p class="text-gray-100 hidden sm:inline-block capitalize">Daerah irigasi adalah kesatuan lahan yang mendapat air dari satu jaringan irigasi. 12. Jaringan irigasi adalah saluran, bangunan, dan bangunan pelengkapnya yang merupakan satu kesatuan yang diperlukan untuk penyediaan, pembagian, pemberian, penggunaan, dan pembuangan air irigasi.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                        <div class="relative hover-img max-h-98 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="@/assets/images/irigation.jpeg" alt="Image description">
                            </a>
                            <div class="absolute px-5 pt-8 pb-20 bottom-0 w-full bg-gradient-cover">
                                <a href="#" class="text-center">
                                    <h2 class="text-6xl font-bold capitalize text-white">9</h2>
                                    <h3 class="text-2xl font-bold capitalize text-white mb-3">Bendung</h3>
                                </a>
                                <p class="text-gray-100 hidden sm:inline-block capitalize">Bendung merupakan bangunan yang dipergunakan untuk meninggikan muka air di sungai sampai ketinggian yang diperlukan agar air mengalir ke saluran irigasi dan petak sawah.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div class="flex-shrink max-w-full w-full lg:w-1/2 pb-1 lg:pb-0 lg:pr-1">
                        <div class="relative hover-img max-h-98 overflow-hidden">
                            <a href="#">
                                <img class="max-w-full w-full mx-auto h-auto" src="@/assets/images/irigation.jpeg" alt="Image description">
                            </a>
                            <div class="absolute px-5 pt-8 pb-20 bottom-0 w-full bg-gradient-cover">
                                <a href="#" class="text-center">
                                    <h2 class="text-6xl font-bold capitalize text-white">85.254</h2>
                                    <h3 class="text-2xl font-bold capitalize text-white mb-3">Saluran (M)</h3>
                                </a>
                                <p class="text-gray-100 hidden sm:inline-block capitalize">Bendung merupakan bangunan yang dipergunakan untuk meninggikan muka air di sungai sampai ketinggian yang diperlukan agar air mengalir ke saluran irigasi dan petak sawah.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
        <Footer/>
        
    </div>
</template>

<script setup>
    import Navbar from "../../components/navbar-menu/Main.vue";
    import Footer from "../../components/footer-public/Main.vue";
</script>

<style scoped>
    @import "./style.css";
</style>