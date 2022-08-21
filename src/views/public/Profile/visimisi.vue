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
    
    <div class="intro-y text-justify leading-relaxed">
      <h1 class="text-lg text-2xl text-center mr-auto">Visi</h1>
      <p class="mb-5">{{ $f()[1].news[0].content }}</p>
      <h1 class="text-lg text-2xl text-center mr-auto">Misi</h1>

      <p class="mb-5">{{ $f()[2].news[0].content }}</p>
      <h1 class="text-lg text-2xl text-center mr-auto">Prinsip</h1>

      <p>{{ $f()[3].news[0].content }}</p>
    </div>
  </div>
</template>
