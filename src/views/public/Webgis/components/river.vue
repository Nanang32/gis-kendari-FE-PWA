<template>
  <div>
    <table>
      <tr>
        <td>Kelompok Data Dasar</td><td>{{ river['Kelompok Data Dasar'] }}</td>
      </tr>
      <tr>
        <td>Nama Data Dasar</td><td>{{ river['Nama Data Dasar'] }}</td>
      </tr>
        <td>Tahun Data</td><td>{{ river['Tahun Data'] }}</td>
      <tr>
        <td>Kondisi</td><td>{{ river['Kondisi'] }}</td>
      </tr>
      <tr>
        <td>Nama WS</td><td>{{ river['Nama WS'] }}</td>
      </tr>
      <tr>
        <td>Nama DAS</td><td>{{ river['Nama DAS'] }}</td>
      </tr>
      <tr>
        <td>Status</td><td>{{ river['Status'] }}</td>
      </tr>

      <tr>
        <td>Kode Bidang Pekerjaan Umum</td><td>{{ river['Kode Bidang Pekerjaan Umum'] }}</td>
      </tr>
      <tr>
        <td>Kode Data Dasar Jenis Infrastruktur</td><td>{{ river['Kode Data Dasar Jenis Infrastruktur'] }}</td>
      </tr>
      <tr>
        <td>Kode Infrastruktur</td><td>{{ river['Kode Infrastruktur'] }}</td>
      </tr>

      <tr>
        <td>Provinsi</td><td>{{ river['Provinsi'] }}</td>
      </tr>
      <tr>
        <td>Kotakab</td><td>{{ river['Kotakab'] }}</td>
      </tr>
      <tr>
        <td>Kecamatan</td><td>{{ river['Kecamatan'] }}</td>
      </tr>
      <tr>
        <td>KelDesa</td><td>{{ river['KelDesa'] }}</td>
      </tr>
      <tr>
        <td>Lokasi</td><td>{{ river['Lokasi'] }}</td>
      </tr>

      <tr>
        <td>Irigasi (Ha)</td><td>{{ river['Irigasi (Ha)'] }}</td>
      </tr>
      <tr>
        <td>DMI (m3/detik)</td><td>{{ river['DMI (m3/detik)'] }}</td>
      </tr>
      <tr>
        <td>PLTA (MWH)</td><td>{{ river['PLTA (MWH)'] }}</td>
      </tr>
      <tr>
        <td>Ternak (ekor)</td><td>{{ river['Ternak (ekor)'] }}</td>
      </tr>
      <tr>
        <td>Lain-Lain</td><td>{{ river['Lain-Lain'] }}</td>
      </tr>
                
      <tr>
        <td>Orde</td><td>{{ river['Orde'] }}</td>
      </tr>
      <tr>
        <td>Luas DAS (km2)</td><td>{{ river['Luas DAS (km2)'] }}</td>
      </tr>
      <tr>
        <td>Panjang Sungai (km)</td><td>{{ river['Panjang Sungai (km)'] }}</td>
      </tr>
      <tr>
        <td>Lebar Maximum (m)</td><td>{{ river['Lebar Maximum (m)'] }}</td>
      </tr>
      <tr>
        <td>Kelerengan Rata-rata</td><td>{{ river['Kelerengan Rata-rata'] }}</td>
      </tr>
      <tr>
        <td>Q Max (m3/dtk)</td><td>{{ river['Q Max (m3/dtk)'] }}</td>
      </tr>
      <tr>
        <td>Keterangan</td><td>{{ river['Keterangan'] }}</td>
      </tr>

      <!-- <tr>
        <td>Titik Koord 1</td><td>{{ river['Titik Koord 1'] }}</td>
      </tr>
      <tr>
        <td>Titik Koord 2</td><td>{{ river['Titik Koord 2'] }}</td>
      </tr>
      <tr>
        <td>Titik Koord 3</td><td>{{ river['Titik Koord 3'] }}</td>
      </tr>
      <tr>
        <td>Titik Koord 4</td><td>{{ river['Titik Koord 4'] }}</td>
      </tr>
      <tr>
        <td>Photo 1 (Koord 1)</td><td>{{ river['Photo 1 (Koord 1)'] }}</td>
      </tr>
      <tr>
        <td>Photo 2 (Koord 2)</td><td>{{ river['Photo 2 (Koord 2)'] }}</td>
      </tr>
      <tr>
        <td>Photo 3 (Koord 3)</td><td>{{ river['Photo 3 (Koord 3)'] }}</td>
      </tr>
      <tr>
        <td>Photo 4 (Koord 4)</td><td>{{ river['Photo 4 (Koord 4)'] }}</td>
      </tr>
      <tr>
        <td>Video</td><td>{{ river['Video'] }}</td>
      </tr> -->
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