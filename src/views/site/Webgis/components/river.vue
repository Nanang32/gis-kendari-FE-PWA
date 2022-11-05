<template>
    <div>
        <div class="overflow-x-auto">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">data dasar infrastruktur</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Kelompok Data Dasar Infrastruktur</td>
                        <td>{{ river['Kelompok Data Dasar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama Data Dasar Infrastruktur</td>
                        <td>{{ river['Nama Data Dasar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tahun Data</td>
                        <td>{{ river['Tahun Data'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kondisi</td>
                        <td>{{ river['Kondisi'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">I. informasi wilayah sungai</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Nama Wilayah Sungai</td>
                        <td>{{ river['Nama W'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama DAS</td>
                        <td>{{ river['Nama DAS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Status</td>
                        <td>{{ river['Status'] }}</td>
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
                        <td>{{ river['Kode Bidang Pekerjaan Umum'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Data Dasar Jenis Infrastruktur
                        </td>
                        <td>{{ river['Kode Data Dasar Jenis Infrastruktur'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Infrastruktur (Sesuai Ketentuan Ditjen SDA)
                        </td>
                        <td>{{ river['Kode Infrastruktur'] }}</td>
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
                        <td>{{ river['Provinsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kota/Kab.
                        </td>
                        <td>{{ river['Kotakab'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kecamatan</td>
                        <td>{{ river['Kecamatan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kel./Desa</td>
                        <td>{{ river['KelDesa'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lokasi</td>
                        <td>{{ river['Lokasi'] }}</td>
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
                        <td>{{ river['Irigasi (Ha)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">DMI (M<sup>3</sup>/Detik)</td>
                        <td>{{ river['DMI (m3/detik)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">PLTA (MWH)</td>
                        <td>{{ river['PLTA (MWH)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Ternak (Ekor)</td>
                        <td>{{ river['Ternak (ekor)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">lain-lain</td>
                        <td>{{ river['Lain-Lain'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">V. data teknis</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">order</td>
                        <td>{{ river['Orde'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">luas DAS (km<sup>2</sup>)</td>
                        <td>{{ river['Luas DAS (km2)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">panjang sungai (Km)</td>
                        <td>{{ river['Panjang Sungai (km)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lebar maximum (M)</td>
                        <td>{{ river['Lebar Maximum (m)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kelerengan Rata<sup>2</sup></td>
                        <td>{{ river['Kelerengan Rata-rata'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Q max (M<sup>3</sup>/Dtk) </td>
                        <td>{{ river['Q Max (m3/dtk)'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Keterangan</td>
                        <td>{{ river['Keterangan'] }}</td>
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
                        <td>{{ river['Titik Koord 1'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Koordinat 2</td>
                        <td>{{ river['Titik Koord 2'] }}</td>
                    </tr>
                     <tr>
                        <td class="font-semibold">Koordinat 3</td>
                        <td>{{ river['Titik Koord 3'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Koordinat 4</td>
                        <td>{{ river['Titik Koord 4'] }}</td>
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
                        <td>{{ river['Foto_file_path'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold" colspan="2">
                            Video
                            <iframe v-if="river['Video']" class="max-w-full w-full mx-auto" :src="getEmbedLink(river['Video'])" frameborder="0" allowfullscreen></iframe>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold" colspan="2">
                            File
                            <a v-if="river['Peta']" :href="river['Peta']">Download</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    river: {
        type: Object,
        default: {}
    }
})

function getEmbedLink(youtubeLink){
    var res = youtubeLink.split("=");
    return "https://www.youtube.com/embed/"+res[1];
}
</script>