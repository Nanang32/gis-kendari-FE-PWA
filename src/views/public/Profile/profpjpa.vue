<template>
    <div class="intro-y grid grid-cols-12  mt-1">
        <div class="col-span-12 lg:col-span-12">
            <!-- BEGIN: Basic Tab -->
            <!-- END: Basic Tab -->
            <!-- BEGIN: Boxed Tab -->
            <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
                <div class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 class="font-medium text-base mr-auto">BIDANG PELAKSANAAN JARINGAN PEMANFAATAN AIR (PJPA)</h2>
                </div>
                <div class="p-5">
                    <Preview>
                        <TabGroup>
                            <TabList class="nav-boxed-tabs">
                                <Tab class="w-full py-2" tag="button">Tugas & Fungsi</Tab>
                                <Tab class="w-full py-2" tag="button">Program</Tab>
                                <Tab class="w-full py-2" tag="button">Struktur</Tab>
                            </TabList>
                            <TabPanels class="mt-5">
                                <!-- berita section -->
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-9">
                                            <div class="p-5 text-slate-600 dark:text-slate-500">
                                                {{ faker.news[0].shortContent }}
                                                {{ faker.news[0].shortContent }}
                                                {{ faker.news[0].shortContent }}
                                                {{ faker.news[0].shortContent }}
                                            </div>
                                        </div>
                                        <!-- END: Blog Layout -->
                                    </div>
                                </TabPanel>
                                <!-- end berita section -->
                                <!-- video section -->
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-9">
                                            <div class="p-5 text-slate-600 dark:text-slate-500">
                                                {{ faker.news[0].shortContent }}
                                                {{ faker.news[0].shortContent }}
                                                {{ faker.news[0].shortContent }}
                                                {{ faker.news[0].shortContent }}
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <!-- end video section -->
                                <!-- photo section -->
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <div v-for="(faker, fakerKey) in $_.take($f(),1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-9">
                                            
                                            <div class="intro-y mt-6">
                                                <div class="h-40 2xl:h-64 image-fit">
                                                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" :src="faker.images[0]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <!-- end photo section -->
                            </TabPanels>
                        </TabGroup>
                    </Preview>
                </div>
            </PreviewComponent>
            <!-- END: Boxed Tab -->
        </div>
    </div>
</template>