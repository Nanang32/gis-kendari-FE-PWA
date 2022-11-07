<template>
  <div class=" mb-5">
      <TinySlider :options="{
                  mode: 'gallery',
                  controls: true,
                  nav: true,
                  speed: 500,
                }">
          <div class="h-96">
              <div class="h-full image-fit overflow-hidden">
                  <img alt="Enigma Tailwind HTML Admin Template" src="@/assets/images/back1.jpg" />
              </div>
          </div>
          <div class="h-96 px-2">
              <div class="h-full image-fit overflow-hidden">
                  <img alt="Enigma Tailwind HTML Admin Template" src="@/assets/images/back2.jpg" />
              </div>
          </div>
          <div class="h-96 px-2">
              <div class="h-full image-fit overflow-hidden">
                  <img alt="Enigma Tailwind HTML Admin Template" src="@/assets/images/back3.jpg" />
              </div>
          </div>
      </TinySlider>
  </div>
</template>