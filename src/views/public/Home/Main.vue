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
                        <div v-for="(faker, fakerKey) in $_.take($f(), 2)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-3  mb-2 box">
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
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Berita terkini</h2>
    </div>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <!-- BEGIN: Blog Layout -->
        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-3 box">
            <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                <img alt="Midone Tailwind HTML Admin Template" class="rounded-t-md" :src="faker.images[0]" />
                <div class="absolute bottom-0 text-white px-5 pb-6 z-10">
                    <span class="bg-white/20 px-2 py-1 rounded">{{
                        faker.products[0].category
                        }}</span>
                    <a href="" class="block font-medium text-xl mt-3">{{
                        faker.news[0].title
                        }}</a>
                    <a href=" font-small text-sm mt-3">
                        {{ faker.users[0].name }}, {{ faker.formattedTimes[0] }}
                    </a>
                </div>
            </div>
            <div class="p-5 text-slate-600 dark:text-slate-500">
                {{ faker.news[0].shortContent }}
            </div>
        </div>
        <!-- END: Blog Layout -->
    </div>
    <!-- end berita terkini -->
    <div class="mx-6 pb-8">
        <TinySlider :options="{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    nav: true,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }">
            <div class="h-32 px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                    <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                        1
                    </h3>
                </div>
            </div>
            <div class="h-32 px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                    <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                        2
                    </h3>
                </div>
            </div>
            <div class="h-32 px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                    <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                        3
                    </h3>
                </div>
            </div>
            <div class="h-32 px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                    <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                        1
                    </h3>
                </div>
            </div>
            <div class="h-32 px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                    <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                        2
                    </h3>
                </div>
            </div>
            <div class="h-32 px-2">
                <div class="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                    <h3 class="h-full font-medium flex items-center justify-center text-2xl">
                        3
                    </h3>
                </div>
            </div>
        </TinySlider>
    </div>
</template>