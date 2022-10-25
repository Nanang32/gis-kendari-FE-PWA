<template>
  <div class="mx-11 mt-5 mb-5">
      <TinySlider :options="{
                  mode: 'gallery',
                  controls: true,
                  nav: true,
                  speed: 500,
                }">
          <div class="h-96">
              <div class="h-full image-fit rounded-md overflow-hidden">
                  <img alt="Enigma Tailwind HTML Admin Template" src="@/assets/images/back1.png" />
              </div>
          </div>
          <div class="h-96 px-2">
              <div class="h-full image-fit rounded-md overflow-hidden">
                  <img alt="Enigma Tailwind HTML Admin Template" src="@/assets/images/back2.png" />
              </div>
          </div>
          <div class="h-96 px-2">
              <div class="h-full image-fit rounded-md overflow-hidden">
                  <img alt="Enigma Tailwind HTML Admin Template" src="@/assets/images/back3.png" />
              </div>
          </div>
      </TinySlider>
  </div>
</template>