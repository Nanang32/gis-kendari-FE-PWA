<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 2xl:col-span-9">
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 xl:col-span-8 mt-6 ">
                    <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 box">
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
                            {{ faker.news[0].shortContent }}
                            {{ faker.news[0].shortContent }}
                            {{ faker.news[0].shortContent }}
                            {{ faker.news[0].shortContent }}
                            {{ faker.news[0].shortContent }}
                            {{ faker.news[0].shortContent }}
                            {{ faker.news[0].shortContent }}
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
    <!-- berita terkini -->
    <div class="intro-y flex flex-col sm:flex-row items-center m-3">
        <h2 class="text-lg font-medium mr-auto">Berita terkini</h2>
    </div>
    <div class="mx-6">
        <TinySlider :options="{
                    autoplay: false,
                    controls: true,
                    items: 4,
                    nav: true,
                    responsive: {
                      1280: {
                        items: 4,
                      },
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }">
            <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="h-64 px-6">
                <div class="px-2 intro-y col-span-12 md:col-span-3 box">
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
        </TinySlider>
    </div>
    <!-- end berita terkini -->
    <!-- Video terkini -->
    <div class="intro-y flex flex-col sm:flex-row items-center m-3">
        <h2 class="text-lg font-medium mr-auto">Video terkini</h2>
    </div>
    <!-- end Video terkini -->
    <div class="col-span-12 2xl:col-span-9">
        <div class="grid grid-cols-12 gap-3">
            <div class="col-span-12 xl:col-span-12 mt-6 ">
                <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-6 col-span-2  box">
                    <div class="p-5">
                        <div class="h-96 2xl:h-64 image-fit">
                            <!-- <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" :src="faker.images[0]" /> -->
                            <iframe src="https://www.youtube.com/embed/UBOj6rqRUME" frameborder="0" allowfullscreen class="absolute top-0 left-0 w-full h-full"></iframe>
                        </div>
                        <div class="h-52">
                            <a href="" class="block font-medium text-base m-2">{{
                                faker.news[0].title
                                }}</a>
                            <div class="text-slate-600 dark:text-slate-500  ">
                                {{ faker.news[0].shortContent }}
                                <button class="btn btn-elevated-rounded-secondary w-24 m-1 mb-2">
                                    Selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="mx-1">
                        <TinySlider :options="{
                    autoplay: false,
                    controls: true,
                    items: 4,
                    nav: true,
                    responsive: {
                      1280: {
                        items: 4,
                      },
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }">
                            <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="h-64 px-6">
                                <div class="px-2 intro-y col-span-12 md:col-span-3 box">
                                    <div class="h-40 2xl:h-64 image-fit">
                                        <!-- <img alt="Midone Tailwind HTML Admin Template" class="rounded-md" :src="faker.images[0]" /> -->
                                        <iframe src="https://www.youtube.com/embed/UBOj6rqRUME" frameborder="0" allowfullscreen class="absolute top-0 left-0 w-full h-full"></iframe>
                                    </div>
                                    <a href="" class="block font-medium text-base mt-5">{{
                                        faker.news[0].title
                                        }}</a>
                                    <div class="text-slate-600 dark:text-slate-500 mt-2">
                                        {{ faker.news[0].shortContent }}
                                    </div>
                                </div>
                            </div>
                        </TinySlider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>