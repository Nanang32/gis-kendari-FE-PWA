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
                            <td>{{ groin['Kl_Dat_Das'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Nama Data Dasar</td>
                            <td>{{ groin['Nm_Dat_Das'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tahun Data</td>
                            <td>{{ groin['Thn_Data'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Kondisi</td>
                            <td>{{ groin['Kondisi'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">I. Informasi wilayah sungai</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">Wilayah sungai</td>
                            <td>{{ groin['Nm_WS'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Nama DAS</td>
                            <td>{{ groin['Nm_DAS'] }}</td>
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
                            <td>{{ groin['Kd_Kem'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode unit organisasi</td>
                            <td>{{ groin['Kd_Unor'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode data dasar jenis infrastruktur</td>
                            <td>{{ groin['Kd_Dat_Das'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode daerah irigasi</td>
                            <td>{{ groin['Kd_WS'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode infrastruktur</td>
                            <td>{{ groin['Kd_Inf'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">II. lokasi</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">provinsi</td>
                            <td>{{ groin['Provinsi'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kota/kab.</td>
                            <td>{{ groin['Kab_Kota'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kecamatan</td>
                            <td>{{ groin['Kecamatan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kel./Desa</td>
                            <td>{{ groin['Kel_Desa'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Lokasi</td>
                            <td>{{ groin['Lokasi'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">III. manfaat</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">pelindung pulau terdepan</td>
                            <td>{{ groin['Pel_Pulau_Tdpn'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">pelindung jalan raya</td>
                            <td>{{ groin['Pel_Jln_Raya'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">pelindung permukiman</td>
                            <td>{{ groin['Pel_Permukiman'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">pelindung tempat wisata</td>
                            <td>{{ groin['Pel_Tmpt_Wisata'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Pelindung fasilitas umum</td>
                            <td>{{ groin['Pel_Fas_Umum'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Pelindung muara sungaia</td>
                            <td>{{ groin['Pel_Muara_Sungai'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Lain-lain</td>
                            <td>{{ groin['Lainnya'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">IV. data teknis</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">Kewenangan</td>
                            <td>{{ groin['Kewenangan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">jenis bangunan</td>
                            <td>{{ groin['Jns_Bang'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Kepentingan Pantai</td>
                            <td>{{ groin['Kep_Pantai'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tahun pelaksanaa</td>
                            <td>{{ groin['Thn_Pelaksanaan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">panjang</td>
                            <td>{{ groin['Pjg'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">struktur</td>
                            <td>{{ groin['Struktur'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">material</td>
                            <td>{{ groin['Material'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase capitalize">V. koordinat</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">koordinat x</td>
                            <td>{{ groin['Koord_X'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">koordinat y</td>
                            <td>{{ groin['Koord_Y'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase capitalize">Vi. photo dan video</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold" colspan="3">
                                Foto
                                <img class="content-start mx-auto" :src="(groin['Foto'])" alt="" style="height:300px;width:300px;">
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold h-56" colspan="3">
                                Video
                                <iframe v-if="groin['Video']" class="max-w-full w-full aspect-video" :src="getEmbedLink(groin['Video'])" frameborder="0" allowfullscreen></iframe>
                            </td>
                        </tr>
                        <tr>
                            <td class="font-semibold" colspan="2">
                                File Peta (Shp)
                            </td>
                            <td class="font-semibold" colspan="2">
                                <a v-if="groin['Peta']" :href="groin['Peta']" target="_blank" class="text-blue-500">File Download</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    groin: {
        type: Object,
        default: {}
    }
})

function getEmbedLink(youtubeLink) {
    var res = youtubeLink.split("=");
    return "https://www.youtube.com/embed/" + res[1];
}
</script>