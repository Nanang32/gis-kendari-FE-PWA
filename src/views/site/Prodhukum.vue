<template>
    <div class="bg-gray-50 py-6">
        <Navbar />
        <div class="flex flex-row items-center">
            <div class="rounded-md object-cover overflow-hidden">
                <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/prodhukum.png" alt="author"></a>
            </div>
        </div>
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="flex flex-row flex-wrap">
                <!-- Left -->
                <div class="flex-shrink max-w-full w-full lg:w-2/3 mt-10 overflow-hidden">
                    <div class="w-full py-3">
                        <h2 class="text-gray-800 text-3xl font-bold">
                            <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Produk Hukum
                        </h2>
                    </div>
                    <div class="px-2 py-2 border border-gray-100 bg-white">
                        <div class="flex items-center py-2">
                            <input type="text" class="w-full leading-5 relative py-3 px-5 text-gray-800 bg-white border border-gray-100 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" v-model="query" placeholder="Ketik pencarian disini...">
                            <button class="flex items-center py-3 px-5 leading-5 text-gray-100 bg-black hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0" type="button" @click="search">
                                Cari
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row flex-wrap -mx-3">
                        <div class="flex-shrink max-w-full w-full px-3 pb-5">
                            <div class="relative hover-img max-h-full overflow-scroll">
                                <div class="intro-y box p-5 mt-5">
                                    <div class="overflow-y-auto rounded-lg border shadow-2xl">
                                        <table class="table table-hover">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th class="whitespace-nowrap">Nama berkas</th>
                                                    <th class="whitespace-nowrap">Tahun</th>
                                                    <th class="whitespace-nowrap text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="text-center" v-for="lawDocument in lawDocuments">
                                                    <td class="whitespace-nowrap"> {{ lawDocument.title }}</td>
                                                    <td class="whitespace-nowrap"> {{ lawDocument.year }}</td>
                                                    <td class="whitespace-nowrap">
                                                        <a class="btn btn-sm btn-white w-24 m-2" :href="lawDocument.file_url" target="_blank">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </a>
                                                        <a class="btn btn-sm btn-white w-24 " :href="lawDocument.file_url">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- right -->
                <div class="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-24 lg:pb-8 order-first lg:order-last mt-16">
                    <div class="w-full bg-white">
                        <div class="mb-6">
                            <div class="overflow-visible rounded-lg border shadow-2xl">
                                <table class="table table-hover">
                                    <thead class="table-dark rounded-lg">
                                        <tr>
                                            <th class="whitespace-nowrap">Undang - undang</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="category in categories">
                                            <td class="whitespace-nowrap" @click="loadLaw(category.id)">
                                                <FileTextIcon class="w-4 h-4 mr-2 inline" /> {{ category.name }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
import sendRequest from '@libs/http.js'
import { ref, onMounted } from "vue";
const categories = ref([]);
const lawDocuments = ref([]);
const loading = ref(true);
const query = ref('');

async function search() {
    if (query == '')
        return;
    loading.value = true;
    lawDocuments.value = [];
    const response = await sendRequest({
        method: 'get',
        url: '/laws',
        params: { search: query.value }
    });
    if ((response !== null) && (response.status === true)) {
        lawDocuments.value = response.data.lawDocuments.data
        console.log(lawDocuments.value)
    }
    loading.value = false;
}

async function loadCategory() {
    loading.value = true;
    const response = await sendRequest({
        method: 'get',
        url: '/laws/category',
    });
    if ((response !== null) && (response.status === true)) {
        categories.value = response.data.categories
    }
    loading.value = false;
}

async function loadLaw(categoryId) {
    loading.value = true;
    lawDocuments.value = [];
    const response = await sendRequest({
        method: 'get',
        url: `/laws/category/${categoryId}`,
    });
    if ((response !== null) && (response.status === true)) {
        lawDocuments.value = response.data.lawDocuments
    }
    loading.value = false;
}

onMounted(async () => {
    loadCategory()
});
</script>
<style scoped>
@import "./style.css";
</style>