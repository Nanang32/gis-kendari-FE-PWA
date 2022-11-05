<template>
  <div>
        <div class="overflow-x-auto">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">data dasar infrastruktur</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Kelompok Data Dasar</td>
                        <td>{{ watershed['kelompok_data_dasar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama Data Dasar</td>
                        <td>{{ watershed['nama_data_dasar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tahun Data</td>
                        <td>{{ watershed['tahun'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kondisi</td>
                        <td>{{ watershed['kondisi'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">I. informasi wilayah sungai</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Nama WS</td>
                        <td>{{ watershed['nama_wilayah_sungai'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Status</td>
                        <td>{{ watershed['status'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">II. kodefikasi</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Kode Bidang Pekerjaan Umum</td>
                        <td>{{ watershed['kode_bidang_pekerjaan_umum'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Data Dasar Jenis Infrastruktur
                        </td>
                        <td>{{ watershed['kode_data_dasar_jenis_infrastruktur'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Infrastruktur (Sesuai Ketentuan Ditjen SDA)
                        </td>
                        <td>{{ watershed['kode_infrastruktur'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase capitalize">III. lokasi</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">propinsi</td>
                        <td>{{ watershed['propinsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kota/Kab.
                        </td>
                        <td>{{ watershed['kota'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kecamatan</td>
                        <td>{{ watershed['kecamatan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kel./Desa</td>
                        <td>{{ watershed['kelurahan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lokasi</td>
                        <td>{{ watershed['lokasi'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">IV. manfaat</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">irigasi (ha)</td>
                        <td>{{ watershed['irigasi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">DMI (M<sup>3</sup>/Detik)</td>
                        <td>{{ watershed['dmi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">PLTA (MWH)</td>
                        <td>{{ watershed['plta'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Ternak (Ekor)</td>
                        <td>{{ watershed['ternak'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">lain-lain</td>
                        <td>{{ watershed['lainnya'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">V. data teknis</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Luas (km<sup>2</sup>)</td>
                        <td>{{ watershed['luas'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tanggul)</td>
                        <td>{{ watershed['tanggul'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">parapet</td>
                        <td>{{ watershed['parapet'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Revetment</td>
                        <td>{{ watershed['revetment'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Ambang Dasar / Ground Sill</td>
                        <td>{{ watershed['ambang_dasar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Krib</td>
                        <td>{{ watershed['krib'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Bangunan Drainase/ Sluice</td>
                        <td>{{ watershed['bangunan_drainase'] }}</td>
                    </tr>
                     <tr>
                        <td class="font-semibold">Stasiun Pompa</td>
                        <td>{{ watershed['stasiun_pompa'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Sabo DAM / Check DAM</td>
                        <td>{{ watershed['sabo_dam)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Keterangan</td>
                        <td>{{ watershed['keterangan'] }}</td>
                    </tr>
                </tbody>
            </table>
             <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase capitalize">Vi. KOORDINAT (DECIMAL DEGREE)</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Koordinat 1</td>
                        <td>{{ watershed['Titik Koord 1'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Koordinat 2</td>
                        <td>{{ watershed['Titik Koord 2'] }}</td>
                    </tr>
                     <tr>
                        <td class="font-semibold">Koordinat 3</td>
                        <td>{{ watershed['Titik Koord 3'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Koordinat 4</td>
                        <td>{{ watershed['Titik Koord 4'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase capitalize">Vi. photo dan video</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Foto</td>
                        <td>{{ watershed['Foto_file_path'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold" colspan="2">
                            Video
                            <iframe v-if="watershed['Video']" class="max-w-full w-full mx-auto" :src="getEmbedLink(watershed['Video'])" frameborder="0" allowfullscreen></iframe>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold" colspan="2">
                            File
                            <a v-if="watershed['Peta']" :href="watershed['Peta']">Download</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
  const props = defineProps({
    watershed: {
          type: Object,
          default: {}
      }
  })

  function getEmbedLink(youtubeLink){
      var res = youtubeLink.split("=");
      return "https://www.youtube.com/embed/"+res[1];
  }
</script>