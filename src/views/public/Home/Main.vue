<template>
    <div class="row">
        <div class="intro-y grid grid-cols-12 gap-6">
            <!-- BEGIN: Blog Layout -->
            <div v-for="(faker, fakerKey) in $_.take($f(), 1)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-6 col-span-2 box">
                <div class="p-5">
                    <div class="h-64 2xl:h-56 image-fit">
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
            <div v-for="(faker, fakerKey) in $_.take($f(), 2)" :key="fakerKey" class="intro-y col-span-12 md:col-span-6 xl:col-span-3 box">
                <div class="p-5">
                    <div class="h-40 2xl:h-56 image-fit">
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
            <!-- END: Blog Layout -->
        </div>
    </div>
</template>