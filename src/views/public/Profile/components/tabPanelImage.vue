<template>
    <TabPanel class="leading-relaxed">
        <div v-if="imageUrl != ''" class="intro-y grid grid-cols-12 gap-6 mt-5">
            <div class="intro-y col-span-12 md:col-span-12 box">

                <div class="before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 ">
                    <img class="rounded-t-md h-fit" :src="imageUrl" data-action="zoom"/>

                </div>
            </div>
        </div>
    </TabPanel>
</template>
<script setup>
    import sendRequest from '@libs/http.js'
    import { ref, onMounted } from "vue";
    const loading = ref(false);
    const imageUrl = ref('');
    const props = defineProps({
        url: {
            type: String,
            required: true,
        },
        dataProp: {
            type: String,
            required: true,
        },
    });
  
    onMounted(async () => {
      const response = await sendRequest({
          method: 'get',
          url: props.url,
      });
      if ((response !== null) && (response.status === true)) {
        imageUrl.value = response.data[props.dataProp].file_url
      }
    });
</script>