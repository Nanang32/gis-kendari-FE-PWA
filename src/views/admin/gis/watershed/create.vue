<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :watershed="watershed" @submit="onSubmit"></Form>
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
let watershed = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};

async function onSubmit(data) {
    loading.value = true;
    const formdata = new FormData();
    formdata.append('unit_eselon_i', watershed.unit_eselon_i)
    formdata.append('unit_eselon_iia', watershed.unit_eselon_iia)
    formdata.append('unit_eselon_iiia', watershed.unit_eselon_iiia)
    formdata.append('kelompok_data_dasar', watershed.kelompok_data_dasar)
    formdata.append('nama_data_dasar', watershed.nama_data_dasar)
    formdata.append('tahun', watershed.tahun)
    formdata.append('kondisi', watershed.kondisi)
    formdata.append('nama_wilayah_sungai', watershed.nama_wilayah_sungai)
    formdata.append('kode_bidang_pekerjaan_umum', watershed.kode_bidang_pekerjaan_umum)
    formdata.append('kode_data_dasar_jenis_infrastruktur', watershed.kode_data_dasar_jenis_infrastruktur)
    formdata.append('kode_infrastruktur', watershed.kode_infrastruktur)
    formdata.append('propinsi', watershed.propinsi)
    formdata.append('kota', watershed.kota)
    formdata.append('kecamatan', watershed.kecamatan)
    formdata.append('kelurahan', watershed.kelurahan)
    formdata.append('lokasi', watershed.lokasi)
    formdata.append('irigasi', watershed.irigasi)
    formdata.append('dmi', watershed.dmi)
    formdata.append('plta', watershed.plta)
    formdata.append('ternak', watershed.ternak)
    formdata.append('lainnya', watershed.lainnya)
    formdata.append('luas', watershed.luas)
    // formdata.append('panjang_sungai_utama', watershed.panjang_sungai_utama)
    // formdata.append('mata_air', watershed.mata_air)
    // formdata.append('titik_tertinggi', watershed.titik_tertinggi)
    // formdata.append('titik_terendah', watershed.titik_terendah)
    // formdata.append('muara', watershed.muara)
    // formdata.append('danau_utama', watershed.danau_utama)
    // formdata.append('fitur_geologi', watershed.fitur_geologi)
    // formdata.append('anak_sungai', watershed.anak_sungai)
    // formdata.append('daerah_genangan', watershed.daerah_genangan)
    // formdata.append('waduk', watershed.waduk)
    // formdata.append('curah_hujan', watershed.curah_hujan)
    // formdata.append('limpasan', watershed.limpasan)
    // formdata.append('populasi', watershed.populasi)
    // formdata.append('kota_utama', watershed.kota_utama)
    // formdata.append('tata_guna_lahan', watershed.tata_guna_lahan)
    formdata.append('keterangan', watershed.keterangan)
    formdata.append('coords_file', new File([new Blob([watershed.latlngs])], "coords.txt"));

    // formdata.append('featured_image_file', image.value)

    // formdata.append('file', image.value)
    const response = await sendRequest({
        method: 'post',
        url: '/watersheds',
        data: formdata
    });
    if ((response !== null) && (response.status === true)) {
        router.push({ name: 'admin-watershed' });
    }
    loading.value = false;
}
</script>