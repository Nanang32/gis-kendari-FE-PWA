<template>
    <div class="text-gray-700">
        <Navbar />
        <main id="content">
            <div class="flex flex-row items-center">
                <div class="rounded-md object-cover overflow-hidden">
                    <a href="#"><img class="border max-w-full sm:w-full" src="@/assets/images/profbinamarga.jpg" alt="author"></a>
                </div>
            </div>
            <!-- block news -->
            <div class="bg-gray-50 py-6">
                <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div class="flex flex-row flex-wrap">
                        <!-- Left -->
                        <div class="flex-shrink max-w-full w-full lg:w-3/3 overflow-hidden">
                            <div class="box shadow-2xl p-4">
                                <TabGroup>
                                    <TabList class="nav-boxed-tabs">
                                        <Tab class="w-full py-2" tag="button">Tugas & Fungsi</Tab>
                                        <Tab class="w-full py-2" tag="button">Program</Tab>
                                        <Tab class="w-full py-2" tag="button">Struktur</Tab>
                                    </TabList>
                                    <TabPanels class="mt-5">
                                        <TabPanelText url="/public/taskFunction/bina-marga" dataProp="taskFunction" />
                                        <TabPanelText url="/public/workingProgram/bina-marga" dataProp="workingProgram" />
                                        <TabPanelImage url="/public/organizationDiagram/bina-marga" dataProp="organizationDiagram" />
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
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
import TabPanelImage from "./components/tabPanelImage.vue";
import TabPanelText from "./components/tabPanelText.vue";
</script>
<style scoped>
@import "./style.css";
</style>