<template>
    <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Photo dokumentasi Kegiatan</h2>
    </div>
    
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <div v-for="(faker, fakerKey) in $_.take($f(), 6)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-12  box box-content">
            <div class="p-5">
                <div class=" px-2 py-2  lg:px-32 box">
                  <a href="" class="block font:2xl: font-bold text-2xl m-3">{{
                        faker.news[0].title
                        }}</a>
                    <div class="flex flex-wrap -m-1 md:-m-2">
                        <div class="flex flex-wrap w-1/2">
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[3]" data-action="zoom" class="block object-cover object-center w-full h-full rounded-lg" />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[3]" data-action="zoom" class="block object-cover object-center w-full h-full rounded-lg" />
                            </div>
                            <div class="w-full p-1 md:p-2">
                                <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[3]" data-action="zoom" class="block object-cover object-center w-full h-full rounded-lg" />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[3]" data-action="zoom" class="block object-cover object-center w-full h-full rounded-lg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[3]" data-action="zoom" class="block object-cover object-center w-full h-full rounded-lg" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[3]" data-action="zoom" class="block object-cover object-center w-full h-full rounded-lg" />
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
        </div>
    </div>
</template>