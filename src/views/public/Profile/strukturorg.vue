<template>
    <div class="intro-y news  p-5 box m-3">
       <div class="intro-y mt-3 mb-3">
              <div class="news__preview image-fit">
                  <img alt="Enigma Tailwind HTML Admin Template" class="object-cover" src="@/assets/images/visimisi.png" />
              </div>
          </div>
      <div class="intro-y text-justify leading-relaxed">
        <img :src="image" />
      </div>
    </div>
  </template>
  
  <script setup>
    import sendRequest from '@libs/http.js'
    import { ref, onMounted } from "vue";
    const loading = ref(false);
    const image = ref('');
  
    onMounted(async () => {
      const response = await sendRequest({
          method: 'get',
          url: '/public/departmentOrganizations',
      });
      if ((response !== null) && (response.status === true)) {
          image.value = response.data.departmentOrganization.file_url
      }
    });
  </script>