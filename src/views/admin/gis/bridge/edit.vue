<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form Kategori</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12">
      <Form
        :loading="loading"
        :bridge="bridge"
        @submit="onSubmit"
      ></Form>
    </div>
  </div>
</template>

<script setup>
import sendRequest from '@libs/http.js'
import Form from "./components/Form.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
const route = useRoute();
const router = useRouter();
const loading = ref(false);
let bridge = reactive({
    name: null
})

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/bridges/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(bridge, response.data.bridge);
  }
  loading.value = false;
})

async function onSubmit(){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('_method', 'PUT')
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
  const response = await sendRequest({
      method: 'POST',
      url: `/bridges/${route.params.id}`,
      data: formdata
  });
  loading.value = false;
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-bridge'});
  }
}
</script>
