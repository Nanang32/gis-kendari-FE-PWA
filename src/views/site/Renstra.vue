<template>
    <div class="bg-gray-50 py-6">
        <Navbar />
        <div class="flex flex-row items-center">
            <div class="rounded-md object-cover overflow-hidden">
                <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/prodrenstra.png" alt="author"></a>
            </div>
        </div>
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="flex flex-row flex-wrap">
                <!-- Left -->
                <div class="flex-shrink max-w-full w-full lg:w-2/3 mt-10 overflow-hidden">
                    <div class="w-full py-3">
                        <h2 class="text-gray-800 text-3xl font-bold">
                            <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Rencana Strategis
                        </h2>
                    </div>
                    <div class="flex flex-row flex-wrap -mx-3">
                        <div class="flex-shrink max-w-full w-full px-3 pb-5" v-if="strategicPlan !== null">
                            <div class="relative hover-img max-h-full overflow-scroll">
                                <div class="intro-y box p-5 mt-5">
                                    <!-- component -->
                                    <div class="py-16 bg-white">
                                        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                <div class="md:7/12 lg:w-12/12">
                                                    <h2 class="text-4xl text-gray-900 font-bold md:text-4xl mb-2"> {{ strategicPlan.title }}</h2>
                                                    <div class="border-t border-gray-200 border-opacity-100 mb-2"></div>
                                                    <div class="mt-6 text-gray-600 text-justify" v-html="strategicPlan.content">
                                                    </div>
                                                    <div class="border-t border-gray-200 border-opacity-100 mt-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 lg:col-span-6 mt-5">
                                <div class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                                    <h2 class="font-medium text-base mr-auto">Lampiran</h2>
                                </div>
                                <div class="p-5">
                                    <div class="flex items-center mt-5">
                                        <div class="file">
                                            <a href="#" class="w-12 file__icon file__icon--file">
                                                <div class="file__icon__file-name text-xs">FILE</div>
                                            </a>
                                        </div>
                                        <div class="ml-4">
                                            <a class="font-medium font-bold text-blue-500 no-underline hover:underline" :href="strategicPlan.file_url" target="_blank">{{ strategicPlan.title }}</a>
                                        </div>
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
                                            <th class="whitespace-nowrap">RPJMD PROV.SULTRA </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="strategicPlan in rpjmd">
                                            <td class="whitespace-nowrap" @click="loadStrategicPlan(strategicPlan.id)">
                                                <FileTextIcon class="w-4 h-4 mr-2 inline" /> {{ strategicPlan.title }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="mb-6">
                            <div class="overflow-visible rounded-lg border shadow-2xl">
                                <table class="table table-hover">
                                    <thead class="table-dark rounded-lg">
                                        <tr>
                                            <th class="whitespace-nowrap">RENSTRA SDABM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="strategicPlan in sdabm">
                                            <td class="whitespace-nowrap" @click="loadStrategicPlan(strategicPlan.id)">
                                                <FileTextIcon class="w-4 h-4 mr-2 inline" /> {{ strategicPlan.title }}
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
const rpjmd = ref([])
const sdabm = ref([])
const strategicPlan = ref(null)

async function loadStrategicPlan(id) {
    const response = await sendRequest({
        method: 'get',
        url: `/strategicPlans/${id}`
    });
    if ((response !== null) && (response.status === true)) {
        strategicPlan.value = response.data.strategicPlan;
    }
}
onMounted(async () => {
    const response = await sendRequest({
        method: 'get',
        url: '/strategicPlans/all',
    });
    if ((response !== null) && (response.status === true)) {
        const strategicPlans = response.data.strategicPlans;
        strategicPlans.forEach(strategicPlan => {
            if (strategicPlan.category === "RPJMD")
                rpjmd.value.push(strategicPlan)
            else if (strategicPlan.category === "SDABM")
                sdabm.value.push(strategicPlan)
        });
    }
})
</script>
<style scoped>
@import "./style.css";
</style>