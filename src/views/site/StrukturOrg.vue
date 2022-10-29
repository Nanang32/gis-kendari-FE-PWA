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