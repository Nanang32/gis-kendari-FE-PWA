<template>
  <div>
    <table>
      <tr>
        <td>Kelompok Data Dasar</td><td>{{ river['Kelompok Data Dasar'] }}</td>
      </tr>
      <tr>
        <td></td><td>Nama Data Dasar</td>
      </tr>
        <td></td><td>Tahun Data</td>
      <tr>
        <td></td><td>Kondisi</td>
      </tr>
      <tr>
        <td></td><td>Nama WS</td>
      </tr>
      <tr>
        <td></td><td>Nama DAS</td>
        <td></td><td>Status</td>

        <td></td><td>Kode Bidang Pekerjaan Umum</td>
        <td></td><td>Kode Data Dasar Jenis Infrastruktur</td>
        <td></td><td>Kode Infrastruktur</td>

        <td></td><td>Provinsi</td>
        <td></td><td>Kotakab</td>
        <td></td><td>Kecamatan</td>
        <td></td><td>KelDesa</td>
        <td></td><td>Lokasi</td>

        <td></td><td>Irigasi (Ha)</td>
        <td></td><td>DMI (m3/detik)</td>
        <td></td><td>PLTA (MWH)</td>
        <td></td><td>Ternak (ekor)</td>
        <td></td><td>Lain-Lain</td>
                
        <td></td><td>Orde</td>
        <td></td><td>Luas DAS (km2)</td>
        <td></td><td>Panjang Sungai (km)</td>
        <td></td><td>Lebar Maximum (m)</td>
        <td></td><td>Kelerengan Rata-rata</td>
        <td></td><td>Q Max (m3/dtk)</td>
        <td></td><td>Keterangan</td>

        <td></td><td>Titik Koord 1</td>
        <td></td><td>Titik Koord 2</td>
        <td></td><td>Titik Koord 3</td>
        <td></td><td>Titik Koord 4</td>
        <td></td><td>Photo 1 (Koord 1)</td>
        <td></td><td>Photo 2 (Koord 2)</td>
        <td></td><td>Photo 3 (Koord 3)</td>
        <td></td><td>Photo 4 (Koord 4)</td>
        <td></td><td>Video</td>
      </tr>
    </table>
  </div>
</template>
<script setup>
const props = defineProps({
    river: {
        type: Object,
        default: {}
    }
})
</script>