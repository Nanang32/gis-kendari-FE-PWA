<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form
                :loading="loading"
                :bridge="bridge"
                @submit="onSubmit">
            </Form>
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
let bridge = reactive({});
const image = ref('');
const onFileChange = (e) => {
    image.value = e.target.files[0];
};


async function onSubmit(data) {
    loading.value = true;
    const formdata = new FormData();
    formdata.append('fid', bridge.fid)
    formdata.append('unit_eselon_i', bridge.unit_eselon_i)
    formdata.append('unit_eselon_iia', bridge.unit_eselon_iia)
    formdata.append('unit_eselon_iiia', bridge.unit_eselon_iiia)
    formdata.append('kelompok_data_dasar', bridge.kelompok_data_dasar)
    formdata.append('nama_data_dasar', bridge.nama_data_dasar)
    formdata.append('tahun', bridge.tahun)
    formdata.append('kondisi', bridge.kondisi)
    formdata.append('nama_wilayah_sungai', bridge.nama_wilayah_sungai)
    formdata.append('daerah_aliran_sungai', bridge.daerah_aliran_sungai)
    formdata.append('kode_bidang_pekerjaan_umum', bridge.kode_bidang_pekerjaan_umum)
    formdata.append('kode_data_dasar_jenis_infrastruktur', bridge.kode_data_dasar_jenis_infrastruktur)
    formdata.append('kode_infrastruktur', bridge.kode_infrastruktur)
    formdata.append('propinsi', bridge.propinsi)
    formdata.append('kota', bridge.kota)
    formdata.append('kecamatan', bridge.kecamatan)
    formdata.append('kelurahan', bridge.kelurahan)
    formdata.append('lokasi', bridge.lokasi)
    formdata.append('irigasi', bridge.irigasi)
    formdata.append('lainnya', bridge.lainnya)
    formdata.append('nama_sungai', bridge.nama_sungai)
    formdata.append('tinggi', bridge.tinggi)
    formdata.append('lebar', bridge.lebar)
    formdata.append('debit_intake_musim_hujan', bridge.debit_intake_musim_hujan)
    formdata.append('debit_intake_musim_kemarau', bridge.debit_intake_musim_kemarau)
    formdata.append('tahun_pembuatan', bridge.tahun_pembuatan)
    formdata.append('tahun_rehab_terakhir', bridge.tahun_rehab_terakhir)
    formdata.append('keterangan', bridge.keterangan)
    formdata.append('geo_json', bridge.geo_json)

    // formdata.append('featured_image_file', image.value)

    // formdata.append('file', image.value)
    const response = await sendRequest({
        method: 'post',
        url: '/bridges',
        data: formdata
    });
    if ((response !== null) && (response.status === true)) {
        router.push({ name: 'admin-bridge' });
    }
    loading.value = false;
}
</script>