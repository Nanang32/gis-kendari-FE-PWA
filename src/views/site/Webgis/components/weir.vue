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
                        <td>{{ weir['Kl_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama Data Dasar Infrastruktur</td>
                        <td>{{ weir['Nm_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tahun Data</td>
                        <td>{{ weir['Thn_Data'] }}</td>
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
                        <td>{{ weir['Nm_WS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama DAS</td>
                        <td>{{ weir['Nm_DAS'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">II. kodefikasi</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Kode Kementrian</td>
                        <td>{{ weir['Kd_Kem'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Unit Organisasi
                        </td>
                        <td>{{ weir['Kd_Unor'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Data Dasar Jenis Infrastruktur
                        </td>
                        <td>{{ weir['Kd_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Bendung
                        </td>
                        <td>{{ weir['Kd_WS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kode Infrastruktur
                        </td>
                        <td>{{ weir['Kd_Inf'] }}</td>
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
                        <td>{{ weir['Provinsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kota/Kab.
                        </td>
                        <td>{{ weir['Kab_Kota'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kecamatan</td>
                        <td>{{ weir['Kecamatan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kel./Desa</td>
                        <td>{{ weir['Kel_Desa'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lokasi</td>
                        <td>{{ weir['Lokasi'] }}</td>
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
                        <td>{{ weir['Irigasi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">DMI (M<sup>3</sup>/Detik)</td>
                        <td>{{ weir['DMI'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">lain-lain</td>
                        <td>{{ weir['Lainnya'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">V. data teknis</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">nama sungai</td>
                        <td>{{ weir['Nm_Sungai'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jenis bendung</td>
                        <td>{{ weir['Jns_Bdg'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tinggi (m)</td>
                        <td>{{ weir['Tinggi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lebar (M)</td>
                        <td>{{ weir['Lebar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi</td>
                        <td>{{ weir['Kondisi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">debit intake musim hujan (m<sup>2</sup>/detik)</td>
                        <td>{{ weir['Deb_Int_Hjn'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">debit intake musim kemarau (m<sup>2</sup>/detik)</td>
                        <td>{{ weir['Deb_Int_Kemarau'] }}</td>
                    </tr>
                     <tr>
                        <td class="font-semibold">tahun pembuatan</td>
                        <td>{{ weir['Thn_Buat'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tahun rehab terakhir</td>
                        <td>{{ weir['Thn_Rebah'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">keterangan</td>
                        <td>{{ weir['Ket'] }}</td>
                    </tr>
                </tbody>
            </table>
             <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase uppercase">VI. KOORDINAT (DECIMAL DEGREE)</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Koordinat X Titik Awal</td>
                        <td>{{ weir['Koord_X'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Koordinat Y Titik Awal</td>
                        <td>{{ weir['Koord_Y'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase uppercase">VII. photo dan video</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold" colspan="3">
                            Foto
                            <img class="content-start mx-auto" :src="(weir['Foto'])" alt="" style="height:300px;width:300px;">
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold h-56" colspan="3">
                            Video
                            <iframe v-if="weir['Video']" class="max-w-full w-full aspect-video" :src="getEmbedLink(weir['Video'])" frameborder="0" allowfullscreen></iframe>
                        </td>
                    </tr>
                    <tr>
                        <td class="font-semibold" colspan="2">
                            File Peta (Shp)
                        </td>
                        <td class="font-semibold" colspan="2">
                            <a v-if="weir['Peta']" :href="weir['Peta']" target="_blank" class="text-blue-500">File Download</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    weir: {
        type: Object,
        default: {}
    }
})
function getEmbedLink(youtubeLink){
    var res = youtubeLink.split("=");
    return "https://www.youtube.com/embed/"+res[1];
}
</script>