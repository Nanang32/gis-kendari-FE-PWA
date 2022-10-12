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
    formdata.append('unit_eselon_i', river.unit_eselon_i)
    formdata.append('unit_eselon_iia', river.unit_eselon_iia)
    formdata.append('unit_eselon_iiia', river.unit_eselon_iiia)
    formdata.append('kelompok_data_dasar', river.kelompok_data_dasar)
    formdata.append('nama_data_dasar', river.nama_data_dasar)
    formdata.append('tahun', river.tahun)
    formdata.append('kondisi', river.kondisi)
    formdata.append('nama_wilayah_sungai', river.nama_wilayah_sungai)
    formdata.append('daerah_aliran_sungai', river.daerah_aliran_sungai)
    formdata.append('kode_bidang_pekerjaan_umum', river.kode_bidang_pekerjaan_umum)
    formdata.append('kode_data_dasar_jenis_infrastruktur', river.kode_data_dasar_jenis_infrastruktur)
    formdata.append('kode_infrastruktur', river.kode_infrastruktur)
    formdata.append('propinsi', river.propinsi)
    formdata.append('kota', river.kota)
    formdata.append('kecamatan', river.kecamatan)
    formdata.append('kelurahan', river.kelurahan)
    formdata.append('lokasi', river.lokasi)
    formdata.append('irigasi', river.irigasi)
    formdata.append('dmi', river.dmi)
    formdata.append('plta', river.plta)
    formdata.append('ternak', river.ternak)
    formdata.append('lainnya', river.lainnya)
    formdata.append('luas_das', river.luas_das)
    formdata.append('panjang_sungai', river.panjang_sungai)
    formdata.append('lebar_maximum', river.lebar_maximum)
    formdata.append('kelerengan_rata2', river.kelerengan_rata2)
    formdata.append('q_max', river.q_max)
    formdata.append('keterangan', river.keterangan)

    // formdata.append('featured_image_file', image.value)

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