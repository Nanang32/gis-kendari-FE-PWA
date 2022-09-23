<template>
    <div class="intro-y flex mt-8">
        <h2 class="text-lg font-medium uppercase mr-auto">sekertariat dinas</h2>
    </div>
    <div class="intro-y grid grid-cols-12  mt-1">
        <div class="col-span-12 lg:col-span-12">
            <!-- BEGIN: Basic Tab -->
            <!-- END: Basic Tab -->
            <!-- BEGIN: Boxed Tab -->
            <PreviewComponent class="intro-y box mt-5">
                <div class="p-5">
                    <Preview>
                        <TabGroup>
                            <TabList class="nav-boxed-tabs">
                                <Tab class="w-full py-2" tag="button">Tugas & Fungsi</Tab>
                                <Tab class="w-full py-2" tag="button">Program</Tab>
                                <Tab class="w-full py-2" tag="button">Struktur</Tab>
                            </TabList>
                            <TabPanels class="mt-5">
                                <TabPanelText
                                    url="/public/taskFunction/sekretariat-dinas"
                                    dataProp="taskFunction"
                                />
                                <TabPanelText
                                    url="/public/workingProgram/sekretariat-dinas"
                                    dataProp="workingProgram"
                                />
                                <TabPanelImage
                                    url="/public/organizationDiagram/sekretariat-dinas"
                                    dataProp="organizationDiagram"
                                />
                            </TabPanels>
                        </TabGroup>
                    </Preview>
                </div>
            </PreviewComponent>
            <!-- END: Boxed Tab -->
        </div>
    </div>
</template>
<script setup>
    import TabPanelImage from "./components/tabPanelImage.vue";
import TabPanelText from "./components/tabPanelText.vue";
</script>