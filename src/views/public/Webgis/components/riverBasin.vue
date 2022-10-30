<template>
  <div>
<div>
        <div class="overflow-x-auto">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">data dasar infrastruktur</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Kelompok Data Dasar</td>
                        <td>{{ riverBasin['Kl_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama Data Dasar</td>
                        <td>{{ riverBasin['Nm_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tahun Data</td>
                        <td>{{ riverBasin['Thn_Data'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kondisi</td>
                        <td>{{ riverBasin['Kondisi'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">I. Informasi wilayah sungai</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Status</td>
                        <td>{{ riverBasin['Status'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">II. Kodefikasi</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">kode kementrian</td>
                        <td>{{ riverBasin['Kd_Kem'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode unit organisasi</td>
                        <td>{{ riverBasin['Kd_Unor'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode data dasar jenis infrastruktur</td>
                        <td>{{ riverBasin['Kd_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode wilayah sungai</td>
                        <td>{{ riverBasin['Kd_WS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode infrastruktur</td>
                        <td>{{ riverBasin['Kd_Inf'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Wilayah Sungai Berdasarkan Permen</td>
                        <td>{{ riverBasin['Kd_WS_Permen'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">IIi. lokasi</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">provinsi</td>
                        <td>{{ riverBasin['Provinsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kota/kab.</td>
                        <td>{{ riverBasin['Kab_kota'] }}</td>
                    </tr>
                    
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">IV. data teknis</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">jumlah DAS</td>
                        <td>{{ riverBasin['Jml_DAS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">nama DAS</td>
                        <td>{{ riverBasin['Nm_DAS'] }}</td>
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
                        <td>---</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Video</td>
                        <td>----</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">File</td>
                        <td>----</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
      riverBasin: {
          type: Object,
          default: {}
      }
  })
</script>