<template>
  <div class="intro-y news  p-5 box m-8">
    <!-- BEGIN: Blog Layout -->
    <h2 class="intro-y font-medium text-xl sm:text-2xl">
      {{ $f()[0].news[0].title }}
    </h2>
    <div
      class="intro-y text-slate-600 dark:text-slate-500 mt-3 text-xs sm:text-sm"
    >
      {{ $f()[0].dates[0] }} <span class="mx-1">•</span>
      <a class="text-primary" href="">{{ $f()[0].products[0].category }}</a>
      <span class="mx-1">•</span> 7 Min read
    </div>
    <div class="intro-y mt-6">
      <div class="news__preview image-fit">
        <img
          alt="Midone Tailwind HTML Admin Template"
          class="rounded-md"
          :src="$f()[0].images[0]"
        />
      </div>
    </div>
    
    <div class="intro-y text-justify leading-relaxed" v-html="content">
    </div>
  </div>
</template>

<script setup>
  import sendRequest from '@libs/http.js'
  import { ref, onMounted } from "vue";
  const loading = ref(false);
  const content = ref('');

  onMounted(async () => {
    const response = await sendRequest({
        method: 'get',
        url: '/public/departmentVisions',
    });
    if ((response !== null) && (response.status === true)) {
        content.value = response.data.departmentVision.content
    }
  });
</script>