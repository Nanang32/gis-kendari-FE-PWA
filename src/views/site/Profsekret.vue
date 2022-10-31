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
                            <div class="flex flex-row flex-wrap -mx-3">
                                <div class="flex-shrink max-w-full w-full px-3">
                                    <div class="p-4 border border-gray-100 bg-white mb-4">
                                        <div class="flex flex-row items-center">
                                            <div class="rounded-md object-cover overflow-hidden">
                                                <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/profsekret.png" alt="author"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box shadow-2xl p-4">
                                <TabGroup>
                                <TabList class="nav-boxed-tabs">
                                    <Tab class="w-full py-2" tag="button">Tugas & Fungsi</Tab>
                                    <Tab class="w-full py-2" tag="button">Program</Tab>
                                    <Tab class="w-full py-2" tag="button">Struktur</Tab>
                                </TabList>
                                <TabPanels class="mt-5">
                                    <TabPanelText url="/public/taskFunction/sekretariat-dinas" dataProp="taskFunction" />
                                    <TabPanelText url="/public/workingProgram/sekretariat-dinas" dataProp="workingProgram" />
                                    <TabPanelImage url="/public/organizationDiagram/sekretariat-dinas" dataProp="organizationDiagram" />
                                </TabPanels>
                            </TabGroup>
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
import TabPanelImage from "./components/tabPanelImage.vue";
import TabPanelText from "./components/tabPanelText.vue";
</script>
<style scoped>
@import "./style.css";
</style>