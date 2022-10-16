<template>
    <div class="intro-y news  p-5 box m-8">
        <!-- BEGIN: Blog Layout -->
        <div class="intro-y mt-6">
            <div class="news__preview image-fit">
                <img alt="Enigma Tailwind HTML Admin Template" class="object-cover" src="@/assets/images/tugasdanfungsi.png" />
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
        url: '/public/departmentTasks',
    });
    if ((response !== null) && (response.status === true)) {
        content.value = response.data.departmentTask.content
    }
  });
</script>