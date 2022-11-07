<template>
  <div class="intro-y news  p-5 box m-3">
     <div class="intro-y mt-3 mb-3">
            <div class="news__preview image-fit">
                <img alt="Enigma Tailwind HTML Admin Template" class="object-cover" src="@/assets/images/visimisi.jpg" />
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