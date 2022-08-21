<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 2xl:col-span-9">
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 xl:col-span-8 mt-6 ">
                    <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-6 col-span-2  box">
                        <div class="p-5">
                            <div class="h-96 2xl:h-64 image-fit">
                                <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" :src="faker.images[0]" />
                            </div>
                            <div class="h-52">
                                <a href="" class="block font-medium text-base mt-5">{{
                                    faker.news[0].title
                                    }}</a>
                                <div class="text-slate-600 dark:text-slate-500 mt-2 ">
                                    {{ faker.news[0].shortContent }}
                                    {{ faker.news[0].shortContent }}
                                    {{ faker.news[0].shortContent }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 xl:col-span-4">
                    <div class="mt-5">
                        <div v-for="(faker, fakerKey) in $_.take($f(), 2)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-3 mb-2 box">
                            <div class="p-5">
                                <div class="h-40 2xl:h-64 image-fit">
                                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" :src="faker.images[0]" />
                                </div>
                                <a href="" class="block font-medium text-base mt-5">{{
                                    faker.news[0].title
                                    }}</a>
                                <div class="text-slate-600 dark:text-slate-500 mt-2">
                                    {{ faker.news[0].shortContent }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="intro-y grid grid-cols-12  mt-1">
        <div class="col-span-12 lg:col-span-12">
            <!-- BEGIN: Basic Tab -->
            <!-- END: Basic Tab -->
            <!-- BEGIN: Boxed Tab -->
            <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
                <div class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 class="font-medium text-base mr-auto">Semua Berita</h2>
                </div>
                <div class="p-5">
                    <Preview>
                        <TabGroup>
                            <TabList class="nav-boxed-tabs">
                                <Tab class="w-full py-2" tag="button">Berita</Tab>
                                <Tab class="w-full py-2" tag="button">Video</Tab>
                                <Tab class="w-full py-2" tag="button">Photo</Tab>
                                <Tab class="w-full py-2" tag="button">Agenda</Tab>
                            </TabList>
                            <TabPanels class="mt-5">
                                <TabPanel class="leading-relaxed">
                                    
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 box">
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
                                        <!-- END: Blog Layout -->
                                        <!-- BEGIN: Pagiantion -->
                                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                                            <nav class="w-full sm:w-auto sm:mr-auto">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">1</a>
                                                    </li>
                                                    <li class="page-item active">
                                                        <a class="page-link" href="#">2</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <select class="w-20 form-select box mt-3 sm:mt-0">
                                                <option>10</option>
                                                <option>25</option>
                                                <option>35</option>
                                                <option>50</option>
                                            </select>
                                        </div>
                                        <!-- END: Pagiantion -->
                                    </div>
                                </TabPanel>
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 box">
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
                                        <!-- END: Blog Layout -->
                                        <!-- BEGIN: Pagiantion -->
                                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                                            <nav class="w-full sm:w-auto sm:mr-auto">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">1</a>
                                                    </li>
                                                    <li class="page-item active">
                                                        <a class="page-link" href="#">2</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <select class="w-20 form-select box mt-3 sm:mt-0">
                                                <option>10</option>
                                                <option>25</option>
                                                <option>35</option>
                                                <option>50</option>
                                            </select>
                                        </div>
                                        <!-- END: Pagiantion -->
                                    </div>
                                </TabPanel>
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 box">
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
                                        <!-- END: Blog Layout -->
                                        <!-- BEGIN: Pagiantion -->
                                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                                            <nav class="w-full sm:w-auto sm:mr-auto">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">1</a>
                                                    </li>
                                                    <li class="page-item active">
                                                        <a class="page-link" href="#">2</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <select class="w-20 form-select box mt-3 sm:mt-0">
                                                <option>10</option>
                                                <option>25</option>
                                                <option>35</option>
                                                <option>50</option>
                                            </select>
                                        </div>
                                        <!-- END: Pagiantion -->
                                    </div>
                                </TabPanel>
                                <TabPanel class="leading-relaxed">
                                    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
                                        <!-- BEGIN: Blog Layout -->
                                        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 box">
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
                                        <!-- END: Blog Layout -->
                                        <!-- BEGIN: Pagiantion -->
                                        <div class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                                            <nav class="w-full sm:w-auto sm:mr-auto">
                                                <ul class="pagination">
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronLeftIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">1</a>
                                                    </li>
                                                    <li class="page-item active">
                                                        <a class="page-link" href="#">2</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">3</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">...</a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                    <li class="page-item">
                                                        <a class="page-link" href="#">
                                                            <ChevronsRightIcon class="w-4 h-4" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                            <select class="w-20 form-select box mt-3 sm:mt-0">
                                                <option>10</option>
                                                <option>25</option>
                                                <option>35</option>
                                                <option>50</option>
                                            </select>
                                        </div>
                                        <!-- END: Pagiantion -->
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