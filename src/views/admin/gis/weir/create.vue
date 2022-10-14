<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :weir="weir" @submit="onSubmit"></Form>
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
let weir = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};


async function onSubmit(data) {
    loading.value = true;
    const formdata = new FormData();
    formdata.append('unit_eselon_i', weir.unit_eselon_i)
    formdata.append('unit_eselon_iia', weir.unit_eselon_iia)
    formdata.append('unit_eselon_iiia', weir.unit_eselon_iiia)
    formdata.append('kelompok_data_dasar', weir.kelompok_data_dasar)
    formdata.append('nama_data_dasar', weir.nama_data_dasar)
    formdata.append('tahun', weir.tahun)
    formdata.append('kondisi', weir.kondisi)
    formdata.append('nama_wilayah_sungai', weir.nama_wilayah_sungai)
    formdata.append('daerah_aliran_sungai', weir.daerah_aliran_sungai)
    formdata.append('kode_bidang_pekerjaan_umum', weir.kode_bidang_pekerjaan_umum)
    formdata.append('kode_data_dasar_jenis_infrastruktur', weir.kode_data_dasar_jenis_infrastruktur)
    formdata.append('kode_infrastruktur', weir.kode_infrastruktur)
    formdata.append('propinsi', weir.propinsi)
    formdata.append('kota', weir.kota)
    formdata.append('kecamatan', weir.kecamatan)
    formdata.append('kelurahan', weir.kelurahan)
    formdata.append('lokasi', weir.lokasi)
    formdata.append('irigasi', weir.irigasi)
    formdata.append('lainnya', weir.lainnya)
    formdata.append('nama_sungai', weir.nama_sungai)
    formdata.append('tinggi', weir.tinggi)
    formdata.append('lebar', weir.lebar)
    formdata.append('debit_intake_musim_hujan', weir.debit_intake_musim_hujan)
    formdata.append('debit_intake_musim_kemarau', weir.debit_intake_musim_kemarau)
    formdata.append('tahun_pembuatan', weir.tahun_pembuatan)
    formdata.append('tahun_rehab_terakhir', weir.tahun_rehab_terakhir)
    formdata.append('keterangan', weir.keterangan)

    formdata.append('coords_file', new File([new Blob([weir.latlngs])], "coords.txt"));

    // formdata.append('file', image.value)
    const response = await sendRequest({
        method: 'post',
        url: '/weirs',
        data: formdata
    });
    if ((response !== null) && (response.status === true)) {
        router.push({ name: 'admin-weir' });
    }
    loading.value = false;
}
</script>