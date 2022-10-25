<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :road="road" @submit="onSubmit"></Form>
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
let irrigation = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};


async function onSubmit(data) {
    loading.value = true;
    const formdata = new FormData();
    formdata.append('unit_eselon_i', irrigation.unit_eselon_i)
    formdata.append('unit_eselon_iia', irrigation.unit_eselon_iia)
    formdata.append('unit_eselon_iiia', irrigation.unit_eselon_iiia)
    formdata.append('kelompok_data_dasar', irrigation.kelompok_data_dasar)
    formdata.append('nama_data_dasar', irrigation.nama_data_dasar)
    formdata.append('tahun', irrigation.tahun)
    formdata.append('kondisi', irrigation.kondisi)
    formdata.append('nama_wilayah_sungai', irrigation.nama_wilayah_sungai)
    formdata.append('daerah_aliran_sungai', irrigation.daerah_aliran_sungai)
    formdata.append('kode_bidang_pekerjaan_umum', irrigation.kode_bidang_pekerjaan_umum)
    formdata.append('kode_data_dasar_jenis_infrastruktur', irrigation.kode_data_dasar_jenis_infrastruktur)
    formdata.append('kode_infrastruktur', irrigation.kode_infrastruktur)
    formdata.append('propinsi', irrigation.propinsi)
    formdata.append('kota', irrigation.kota)
    formdata.append('kecamatan', irrigation.kecamatan)
    formdata.append('kelurahan', irrigation.kelurahan)
    formdata.append('lokasi', irrigation.lokasi)
    formdata.append('irigasi', irrigation.irigasi)
    formdata.append('lainnya', irrigation.lainnya)
    formdata.append('nama_sungai', irrigation.nama_sungai)
    formdata.append('tinggi', irrigation.tinggi)
    formdata.append('lebar', irrigation.lebar)
    formdata.append('debit_intake_musim_hujan', irrigation.debit_intake_musim_hujan)
    formdata.append('debit_intake_musim_kemarau', irrigation.debit_intake_musim_kemarau)
    formdata.append('tahun_pembuatan', irrigation.tahun_pembuatan)
    formdata.append('tahun_rehab_terakhir', irrigation.tahun_rehab_terakhir)
    formdata.append('keterangan', irrigation.keterangan)

    // formdata.append('featured_image_file', image.value)

    // formdata.append('file', image.value)
    const response = await sendRequest({
        method: 'post',
        url: '/irrigations',
        data: formdata
    });
    if ((response !== null) && (response.status === true)) {
        router.push({ name: 'admin-irrigation' });
    }
    loading.value = false;
}
</script>