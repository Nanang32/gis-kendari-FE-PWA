<template>
    <div class="intro-y flex mt-8">
        <h2 class="text-lg font-medium uppercase mr-auto">sekertariat dinas</h2>
    </div>
    <div class="intro-y grid grid-cols-12  mt-1">
        <div class="col-span-12 lg:col-span-12">
            <!-- BEGIN: Basic Tab -->
            <!-- END: Basic Tab -->
            <!-- BEGIN: Boxed Tab -->
            <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
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
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-12 box">
                                            <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" class="rounded-t-md" :src="faker.images[0]" />
                                                <div class="absolute bottom-0 text-white px-5 pb-6 z-10">
                                                    <span class="bg-white/20 px-2 py-1 rounded">{{
                                                        faker.products[0].category
                                                        }}</span>
                                                    <a href="" class="block font-medium text-xl mt-3">{{
                                                        faker.news[0].title
                                                        }}</a>
                                                    {{ faker.users[0].name }},{{ faker.formattedTimes[0] }}
                                                </div>
                                            </div>
                                            <div class="p-5 text-slate-600 dark:text-slate-500">
                                                {{ faker.news[0].shortContent }}
                                            </div>
                                            <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                                                <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                                                    <div class="mr-2">
                                                        Views: <span class="font-medium">{{ faker.totals[1] }}k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <!-- end berita section -->
                                <!-- video section -->
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-12 box">
                                            <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" class="rounded-t-md" :src="faker.images[0]" />
                                                <div class="absolute bottom-0 text-white px-5 pb-6 z-10">
                                                    <span class="bg-white/20 px-2 py-1 rounded">{{
                                                        faker.products[0].category
                                                        }}</span>
                                                    <a href="" class="block font-medium text-xl mt-3">{{
                                                        faker.news[0].title
                                                        }}</a>
                                                    {{ faker.users[0].name }},{{ faker.formattedTimes[0] }}
                                                </div>
                                            </div>
                                            <div class="p-5 text-slate-600 dark:text-slate-500">
                                                {{ faker.news[0].shortContent }}
                                            </div>
                                            <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                                                <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                                                    <div class="mr-2">
                                                        Views: <span class="font-medium">{{ faker.totals[1] }}k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel class="leading-relaxed">
                                   <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-12 box">
                                            <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                                                <img alt="Midone Tailwind HTML Admin Template" class="rounded-t-md" :src="faker.images[0]" />
                                                <div class="absolute bottom-0 text-white px-5 pb-6 z-10">
                                                    <span class="bg-white/20 px-2 py-1 rounded">{{
                                                        faker.products[0].category
                                                        }}</span>
                                                    <a href="" class="block font-medium text-xl mt-3">{{
                                                        faker.news[0].title
                                                        }}</a>
                                                    {{ faker.users[0].name }},{{ faker.formattedTimes[0] }}
                                                </div>
                                            </div>
                                            <div class="p-5 text-slate-600 dark:text-slate-500">
                                                {{ faker.news[0].shortContent }}
                                            </div>
                                            <div class="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
                                                <div class="w-full flex text-slate-500 text-xs sm:text-sm">
                                                    <div class="mr-2">
                                                        Views: <span class="font-medium">{{ faker.totals[1] }}k</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </Preview>
                </div>
            </PreviewComponent>
            <!-- END: Boxed Tab -->
        </div>
    </div>
</template>