<template>
    <div>
        <div class="overflow-x-auto">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">data dasar infrastruktur</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">kelompok data dasar infrastruktur</td>
                        <td>{{ bridge['Kl_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">nama data dasar infrastruktur</td>
                        <td>{{ bridge['Nm_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tahun data</td>
                        <td>{{ bridge['Thn_Data'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">status</td>
                        <td>{{ bridge['Status'] }}</td>
                    </tr>
                     <tr>
                        <td class="font-semibold">Fungsi</td>
                        <td>{{ bridge['Fungsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Mendukung</td>
                        <td>{{ bridge['Mendukung'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">uraian dukungan</td>
                        <td>{{ bridge['Uraian_Duk'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">I. Kodefikasi kelompok data</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">kode kementrian</td>
                        <td>{{ bridge['Kd_Kem'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode unit organisasi</td>
                        <td>{{ bridge['Kd_Unor'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode data dasar infrastruktur</td>
                        <td>{{ bridge['Kd_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode jembatan</td>
                        <td>{{ bridge['Kd_Sk_Ruas_Jalan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode infrastruktur</td>
                        <td>{{ bridge['Kd_Inf'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nomor jembatan</td>
                        <td>{{ bridge['Nmr_Ruas_Tol'] }}</td>
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
                        <td>{{ bridge['Provinsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kota/kab.</td>
                        <td>{{ bridge['Kab_Kota'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kecamatan</td>
                        <td>{{ bridge['Kecamatan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kelurahan/Desa</td>
                        <td>{{ bridge['Kel_Desa'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Dari (Kota)</td>
                        <td>{{ bridge['Dari_Kota'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">KM</td>
                        <td>{{ bridge['Km'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">Iii.kondisi (Dalam KM)</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Kondisi umum jembatan</td>
                        <td>{{ bridge['Kds_Umum_Jemb'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kondisi bangunan atas</td>
                        <td>{{ bridge['Kds_Bang_Atas'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi lantai</td>
                        <td>{{ bridge['Kds_Lantai'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi bangunan bawah</td>
                        <td>{{ bridge['Kds_Bang_Bawah'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi daerah aliran sungai</td>
                        <td>{{ bridge['Kds_DAS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tanggal inspeksi detail</td>
                        <td>{{ bridge['Tgl_Insp_Detail'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">IV. data teknis</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">Panjang (m)</td>
                        <td>{{ bridge['Pjg_Jemb'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lebar (m)</td>
                        <td>{{ bridge['Lbr_Jemb'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tipe bangunan atas</td>
                        <td>{{ bridge['Tipe_Bangn_Atas'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">lebar trotoar (m)</td>
                        <td>{{ bridge['Lbr_Trotoar'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah bentang</td>
                        <td>{{ bridge['Jml_Bentang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">clearennce (Tinggi ruang bebas) (m)</td>
                        <td>{{ bridge['Clearance'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tahun pembangunan</td>
                        <td>{{ bridge['Thn_Bang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">tahun penanganan terakhir</td>
                        <td>{{ bridge['Tgn_Pena_Takhir'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Jenis penanganan</td>
                        <td>{{ bridge['Jns_Pena'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase capitalize">V. koordinat</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">titik koord. x (titik awal jembatan)</td>
                        <td>{{ bridge['Koord_X_Awal'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">titik koord. y (titik awal jembatan)</td>
                        <td>{{ bridge['Koord_Y_Awal'] }}</td>
                    </tr>
                     <tr>
                        <td class="font-semibold">titik koord. x (titik akhir jembatan)</td>
                        <td>{{ bridge['Koord_X_Akhir'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">titik koord. y (titik akhir jembatan)</td>
                        <td>{{ bridge['Koord_Y_Akhir'] }}</td>
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
</template>
<script setup>
const props = defineProps({
    bridge: {
        type: Object,
        default: {}
    }
})
</script>