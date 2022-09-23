<template>
    <TabPanel class="leading-relaxed">
        <div class="intro-y grid grid-cols-12 gap-6 mt-5">
            <!-- BEGIN: Blog Layout -->
            <div class="intro-y col-span-12 md:col-span-12 box">
                <div class="p-5 text-slate-600 dark:text-slate-500" v-html="content">
                </div>
            </div>
        </div>
    </TabPanel>
</template>
<script setup>
    import sendRequest from '@libs/http.js'
    import { ref, onMounted } from "vue";
    const loading = ref(false);
    const content = ref('');
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
        content.value = response.data[props.dataProp].content
      }
    });
</script>