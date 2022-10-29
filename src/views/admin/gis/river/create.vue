<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :river="river" @submit="onSubmit"></Form>
        </div>
    </div>
</template>
<script setup>
import sendRequest from '@libs/http.js'
import Form from "./components/Form.vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
const router = useRouter();
const loading = ref(false);
let river = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};


async function onSubmit(data) {
    loading.value = true;
    const formdata = new FormData();
    Object.keys(river).forEach(key => {
        formdata.append(key, river[key]);
    });

    // formdata.append('file', image.value)
    const response = await sendRequest({
        method: 'post',
        url: '/rivers',
        data: formdata
    });
    if ((response !== null) && (response.status === true)) {
        router.push({ name: 'admin-river' });
    }
    loading.value = false;
}
</script>