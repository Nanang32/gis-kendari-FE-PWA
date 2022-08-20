<template>
    <div class="mx-11">
        <TinySlider :options="{
                    mode: 'gallery',
                    controls: true,
                    nav: true,
                    speed: 500,
                  }">
            <div class="h-64 px-2">
                <div class="h-full image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" :src="$f()[0].images[0]" />
                </div>
            </div>
            <div class="h-64 px-2">
                <div class="h-full image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" :src="$f()[1].images[9]" />
                </div>
            </div>
            <div class="h-64 px-2">
                <div class="h-full image-fit rounded-md overflow-hidden">
                    <img alt="Midone Tailwind HTML Admin Template" :src="$f()[2].images[8]" />
                </div>
            </div>
        </TinySlider>
    </div>
</template>
<script setup>
import { ref } from "vue";

const searchDropdown = ref(false);
const showSearchDropdown = () => {
    searchDropdown.value = true;
};
const hideSearchDropdown = () => {
    searchDropdown.value = false;
};
</script>