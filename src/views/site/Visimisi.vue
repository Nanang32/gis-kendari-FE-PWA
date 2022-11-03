<template>
    <div class="text-gray-700">
        <Navbar />
        <main id="content">
            <div class="flex flex-row items-center">
                <div class="rounded-md object-cover overflow-hidden">
                    <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/visimisi.png" alt="author"></a>
                </div>
            </div>
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden">
                            <div class="flex flex-row flex-wrap -mx-3">
                                <!-- component -->
                                <div class="py-16 bg-white">
                                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                            <div class="md:7/12 lg:w-3/3">
                                                <p class="mt-6 text-gray-600" v-html="content"></p>
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
import sendRequest from '@libs/http.js'
import { ref, onMounted } from "vue";
const loading = ref(false);
const content = ref('');

onMounted(async () => {
    const response = await sendRequest({
        method: 'get',
        url: '/public/departmentVisions',
    });
    if ((response !== null) && (response.status === true)) {
        content.value = response.data.departmentVision.content
    }
});
</script>
<style scoped>
@import "./style.css";
</style>