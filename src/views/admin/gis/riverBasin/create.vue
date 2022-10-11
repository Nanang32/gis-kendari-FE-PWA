<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :riverBasin="riverBasin" @submit="onSubmit"></Form>
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
let riverBasin = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};

async function onSubmit(data) {
    loading.value = true;
    const formdata = new FormData();
    formdata.append('unit_eselon_i', riverBasin.unit_eselon_i)
    formdata.append('unit_eselon_iia', riverBasin.unit_eselon_iia)
    formdata.append('unit_eselon_iiia', riverBasin.unit_eselon_iiia)
    formdata.append('kelompok_data_dasar', riverBasin.kelompok_data_dasar)
    formdata.append('tahun', riverBasin.tahun)
    formdata.append('nama_data_dasar', riverBasin.nama_data_dasar)
    formdata.append('kondisi', riverBasin.kondisi)
    formdata.append('nama_wilayah_sungai', riverBasin.nama_wilayah_sungai)
    formdata.append('kode_bidang_pekerjaan_umum', riverBasin.kode_bidang_pekerjaan_umum)
    formdata.append('kode_data_dasar_jenis_infrastruktur', riverBasin.kode_data_dasar_jenis_infrastruktur)
    formdata.append('kode_infrastruktur', riverBasin.kode_infrastruktur)
    formdata.append('propinsi', riverBasin.propinsi)
    formdata.append('kota', riverBasin.kota)
    formdata.append('kecamatan', riverBasin.kecamatan)
    formdata.append('kelurahan', riverBasin.kelurahan)
    formdata.append('lokasi', riverBasin.lokasi)
    formdata.append('irigasi', riverBasin.irigasi)
    formdata.append('dmi', riverBasin.dmi)
    formdata.append('plta', riverBasin.plta)
    formdata.append('ternak', riverBasin.ternak)
    formdata.append('lainnya', riverBasin.lainnya)
    formdata.append('luas', riverBasin.luas)
    formdata.append('panjang_sungai_utama', riverBasin.panjang_sungai_utama)
    formdata.append('mata_air', riverBasin.mata_air)
    formdata.append('titik_tertinggi', riverBasin.titik_tertinggi)
    formdata.append('titik_terendah', riverBasin.titik_terendah)
    formdata.append('muara', riverBasin.muara)
    formdata.append('danau_utama', riverBasin.danau_utama)
    formdata.append('fitur_geologi', riverBasin.fitur_geologi)
    formdata.append('anak_sungai', riverBasin.anak_sungai)
    formdata.append('daerah_genangan', riverBasin.daerah_genangan)
    formdata.append('waduk', riverBasin.waduk)
    formdata.append('curah_hujan', riverBasin.curah_hujan)
    formdata.append('limpasan', riverBasin.limpasan)
    formdata.append('populasi', riverBasin.populasi)
    formdata.append('kota_utama', riverBasin.kota_utama)
    formdata.append('tata_guna_lahan', riverBasin.tata_guna_lahan)
    formdata.append('keterangan', riverBasin.keterangan)

    // formdata.append('featured_image_file', image.value)

    // formdata.append('file', image.value)
    const response = await sendRequest({
        method: 'post',
        url: '/riverBasins',
        data: formdata
    });
    if ((response !== null) && (response.status === true)) {
        router.push({ name: 'admin-riverbasin' });
    }
    loading.value = false;
}
</script>