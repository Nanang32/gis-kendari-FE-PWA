<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :beach_guard="beach_guard" @submit="onSubmit"></Form>
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
let beach_guard = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};


// async function onSubmit(data) {
//     loading.value = true;
//     const formdata = new FormData();
//     formdata.append('unit_eselon_i', beach_guard.unit_eselon_i)
//     formdata.append('unit_eselon_iia', beach_guard.unit_eselon_iia)
//     formdata.append('unit_eselon_iiia', beach_guard.unit_eselon_iiia)
//     formdata.append('kelompok_data_dasar', beach_guard.kelompok_data_dasar)
//     formdata.append('nama_data_dasar', beach_guard.nama_data_dasar)
//     formdata.append('tahun', beach_guard.tahun)
//     formdata.append('kondisi', beach_guard.kondisi)
//     formdata.append('nama_wilayah_sungai', beach_guard.nama_wilayah_sungai)
//     formdata.append('daerah_aliran_sungai', beach_guard.daerah_aliran_sungai)
//     formdata.append('kode_bidang_pekerjaan_umum', beach_guard.kode_bidang_pekerjaan_umum)
//     formdata.append('kode_data_dasar_jenis_infrastruktur', beach_guard.kode_data_dasar_jenis_infrastruktur)
//     formdata.append('kode_infrastruktur', beach_guard.kode_infrastruktur)
//     formdata.append('propinsi', beach_guard.propinsi)
//     formdata.append('kota', beach_guard.kota)
//     formdata.append('kecamatan', beach_guard.kecamatan)
//     formdata.append('kelurahan', beach_guard.kelurahan)
//     formdata.append('lokasi', beach_guard.lokasi)
//     formdata.append('irigasi', beach_guard.irigasi)
//     formdata.append('lainnya', beach_guard.lainnya)
//     formdata.append('nama_sungai', beach_guard.nama_sungai)
//     formdata.append('tinggi', beach_guard.tinggi)
//     formdata.append('lebar', beach_guard.lebar)
//     formdata.append('debit_intake_musim_hujan', beach_guard.debit_intake_musim_hujan)
//     formdata.append('debit_intake_musim_kemarau', beach_guard.debit_intake_musim_kemarau)
//     formdata.append('tahun_pembuatan', beach_guard.tahun_pembuatan)
//     formdata.append('tahun_rehab_terakhir', beach_guard.tahun_rehab_terakhir)
//     formdata.append('keterangan', beach_guard.keterangan)

//     // formdata.append('featured_image_file', image.value)

//     // formdata.append('file', image.value)
//     const response = await sendRequest({
//         method: 'post',
//         url: '/beach_guards',
//         data: formdata
//     });
//     if ((response !== null) && (response.status === true)) {
//         router.push({ name: 'admin-beach_guard' });
//     }
//     loading.value = false;
// }
</script>