<template>
    <div class="intro-y grid grid-cols-12 gap-6 mt-5">
        <!-- BEGIN: Blog Layout -->
        <div v-for="post in posts" :key="post.id" class="intro-y col-span-12 md:col-span-6 box">
            <div class="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
                <img alt="Midone Tailwind HTML Admin Template" class="rounded-t-md" :src="post.featured_image_url" />
                <div class="absolute bottom-0 text-white px-5 pb-6 z-10">
                    <!-- <span class="bg-white/20 px-2 py-1 rounded">CATEGORY</span> -->
                    <div class="block font-medium text-xl mt-3">{{ post.title }}</div>
                </div>
            </div>
            <div class="p-5 text-slate-600 dark:text-slate-500">
                {{ post.content }}
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
</template>
<script setup>
    import sendRequest from '@libs/http.js'
    import { ref, onMounted } from "vue";
    const loading = ref(false);
    const posts = ref([]);
  
    onMounted(async () => {
      const response = await sendRequest({
          method: 'get',
          url: '/public/posts',
      });
      if ((response !== null) && (response.status === true)) {
        posts.value = response.data.posts.data
      }
    });
</script>