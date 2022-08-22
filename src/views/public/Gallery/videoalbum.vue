<template>

  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Video dokumentasi kegiatan</h2>
    
  </div>
  <div class="intro-y grid grid-cols-12 gap-6 mt-5">
    <!-- BEGIN: Blog Layout -->
    <div
      v-for="(faker, fakerKey) in $_.take($f(), 9)"
      :key="fakerKey"
      class="intro-y col-span-12 md:col-span-6 xl:col-span-4 box"
    >
      <div
        class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 px-5 py-4"
      >
        <div class="w-10 h-10 flex-none image-fit">
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="rounded-full"
            :src="faker.photos[0]"
          />
        </div>
        <div class="ml-3 mr-auto">
          <a href="" class="font-medium">{{ faker.users[0].name }}</a>
          <div class="flex text-slate-500 truncate text-xs mt-0.5">
            <a class="text-primary inline-block truncate" href="">{{
              faker.products[0].category
            }}</a>
            <span class="mx-1">•</span> {{ faker.formattedTimes[0] }}
          </div>
        </div>
        
      </div>
      <div class="p-5">
        <div class="h-40 2xl:h-56 image-fit">
          <img
            alt="Midone Tailwind HTML Admin Template"
            class="rounded-md"
            :src="faker.images[0]"
          />
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
    <!-- BEGIN: Pagination -->
    <div
      class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
    >
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
    <!-- END: Pagination -->
  </div>
</template>