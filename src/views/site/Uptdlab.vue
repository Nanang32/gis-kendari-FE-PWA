<template>
    <div class="text-gray-700">
        <Navbar />
        <main id="content">
            <div class="flex flex-row items-center">
                <div class="rounded-md object-cover overflow-hidden">
                    <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/pelulab.png" alt="author"></a>
                </div>
            </div>
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden">
                            <div class="w-full py-3">
                                <h2 class="text-gray-800 text-2xl font-bold">
                                    <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>  UPTD LABORATORIUM KONSTRUKSI SDABM
                                </h2>
                            </div>
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="flex-shrink max-w-full w-full px-3">
                                    <div class="p-4 border border-gray-100 bg-white mb-4">
                                        <div class="flex flex-row items-center">
                                            <div class="rounded-full overflow-hidden">
                                                <a href="#"><img class="border max-w-full w-20 sm:w-32" src="@/assets/images/lsultra.png" alt="author"></a>
                                            </div>
                                            <div class="ml-8">
                                                <!--name-->
                                                <h4 class="text-2xl">
                                                    <span class="font-bold uppercase"> UPTD LABORATORIUM KONSTRUKSI SDABM</span>
                                                </h4>
                                                <p class="hidden sm:block font-medium">
                                                    HUBUNGI KAMI <br>
                                                    Alamat : Jalan Mayjen S. Parman No. 1A Kota Kendari <br>
                                                    No. Telp : (0401) 3124046 <br>
                                                    Email : labpusultrakdi@yahoo.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- component -->
                                <div class="py-16 bg-white">
                                    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                            <div class="md:7/12 lg:w-6/12">
                                                <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span> {{ uptd.title }}</h2>
                                                <div class="mt-6 text-gray-600" v-html="uptd.content"></div>
                                            </div>
                                            <div class="md:5/12 lg:w-5/12 py-10" v-if="uptd.image_url !== ''">
                                                <img :src="uptd.image_url" alt="image" loading="lazy" >
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
                                                        <div class="md:5/12 lg:w-5/12" v-if="aspal.image_url !== ''">
                                                            <img :src="aspal.image_url" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{{ aspal.title }}</h2>
                                                            <div class="mt-6 text-gray-600" v-html="aspal.content"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12" v-if="beton.image_url !== ''">
                                                            <img :src="beton.image_url" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{{ beton.title }}</h2>
                                                            <div class="mt-6 text-gray-600" v-html="beton.content"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12" v-if="agregat.image_url !== ''">
                                                            <img :src="agregat.image_url" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{{ agregat.title }}</h2>
                                                            <div class="mt-6 text-gray-600" v-html="agregat.content"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12" v-if="tanah.image_url !== ''">
                                                            <img :src="tanah.image_url" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{{ tanah.title }}</h2>
                                                            <div class="mt-6 text-gray-600" v-html="tanah.content"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            <TabPanel class="leading-relaxed">
                                                <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                                    <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                        <div class="md:5/12 lg:w-5/12" v-if="penyewaan.image_url !== ''">
                                                            <img :src="penyewaan.image_url" alt="image" loading="lazy" width="" height="">
                                                        </div>
                                                        <div class="md:7/12 lg:w-6/12">
                                                            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl"><span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>{{ penyewaan.title }}</h2>
                                                            <div class="mt-6 text-gray-600" v-html="penyewaan.content"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                        </TabPanels>
                                    </TabGroup>
                                </div>
                                <div class="w-full   bg-green-600 shadow-xl shadow-green-200 py-10 px-20 flex justify-between items-center mt-3">
                                    <p class=" text-white capitalize"> <span class="text-4xl font-medium">info</span> <br> <span class="text-lg ">Tarif pengujian di UPTD laborotorium SDABM</span></p>
                                    <a class="px-5 py-3  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400" target="_blank" :href="uptd.attachment_url">CEK DISINI </a>
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

const uptdLabs = ref([]);
const uptd = ref({});
const aspal = ref({});
const beton = ref({});
const agregat = ref({});
const tanah = ref({});
const penyewaan = ref({});
const KEY_UPTD = 'UPTD';
const KEY_ASPAL = 'ASPAL';
const KEY_BETON = 'BETON';
const KEY_AGREGAT = 'AGREGAT';
const KEY_TANAH = 'TANAH';
const KEY_PENYEWAAN = 'PENYEWAAN';


onMounted(async () => {
    const response = await sendRequest({
        method: 'get',
        url: '/uptdLabs',
    });
    if ((response !== null) && (response.status === true)) {
        uptdLabs.value = response.data.uptdlabs
    }
    uptd.value = uptdLabs.value.find(item => item.key === KEY_UPTD)
    aspal.value = uptdLabs.value.find(item => item.key === KEY_ASPAL)
    beton.value = uptdLabs.value.find(item => item.key === KEY_BETON)
    agregat.value = uptdLabs.value.find(item => item.key === KEY_AGREGAT)
    tanah.value = uptdLabs.value.find(item => item.key === KEY_TANAH)
    penyewaan.value = uptdLabs.value.find(item => item.key === KEY_PENYEWAAN)
});
</script>
<style scoped>
@import "./style.css";
</style>