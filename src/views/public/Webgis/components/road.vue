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
                            <td class="font-semibold">kelompok data dasar infrastruktur</td>
                            <td>{{ road['Kl_Dat_Das'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">nama data dasar infrastruktur</td>
                            <td>{{ road['Nm_Dat_Das'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">tahun data</td>
                            <td>{{ road['Thn_Data'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">status</td>
                            <td>{{ road['Status'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Fungsi</td>
                            <td>{{ road['Fungsi'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Mendukung</td>
                            <td>{{ road['Mendukung'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">uraian dukungan</td>
                            <td>{{ road['Uraian_Duk'] }}</td>
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
                            <td>{{ road['Kd_Kem'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode unit organisasi</td>
                            <td>{{ road['Kd_Unor'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode data dasar infrastruktur</td>
                            <td>{{ road['Kd_Dat_das'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode ruas jalan</td>
                            <td>{{ road['Kd_Ruas_Jalan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kode infrastruktur</td>
                            <td>{{ road['Kd_Inf'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Nomor ruas</td>
                            <td>{{ road['Nmr_Ruas'] }}</td>
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
                            <td>{{ road['Provinsi'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kota/kab.</td>
                            <td>{{ road['Kab_Kota'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kecamatan</td>
                            <td>{{ road['Kecamatan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kelurahan/Desa</td>
                            <td>{{ road['Kel_Desa'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Titik pengenal ruas jalan</td>
                            <td>{{ road['Titik_Pgn_Rs_Awal'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Titik Pengenal Ruas Akhir</td>
                            <td>{{ road['Titik_Pgn_Rs_Akhir'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Kode Patok</td>
                            <td>{{ road['Kd_Patok'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">KM Awal Ruas
                            </td>
                            <td>{{ road['Km_Awal_Ruas'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">KM Akhir Ruas</td>
                            <td>{{ road['Km_Akhir_Ruas'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">Iii.kondisi (Dalam KM)</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">baik</td>
                            <td>{{ road['Kds_Baik'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">sedang</td>
                            <td>{{ road['Kds_Sedang'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">rusak ringan</td>
                            <td>{{ road['Kds_Rsk_Ringan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">rusak berat</td>
                            <td>{{ road['Kds_Rsk_Berat'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Mantap (Baik + Sedang) (%)</td>
                            <td>{{ road['Kds_Mantap'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tidak Mantap (Rusak Ringan + Rusak Berat) (%)</td>
                            <td>{{ road['Kds_Tdk_Mantap'] }}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">IV. data teknis</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">Panjang Datar (Km)</td>
                            <td>{{ road['Pjg_Datar'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Panjang Miring (Km)</td>
                            <td>{{ road['Pjg_Miring'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Lebar Rata - Rata Perkerasan Jalan (M)</td>
                            <td>{{ road['Lbr_Pks_Jalan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Lebar Rata - Rata Bahu Jalan (M)
                            </td>
                            <td>{{ road['Lbr_Bahu_Jalan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Lalulintas Harian Rata- Rata Tahunan (Jumlah Kendaraan)</td>
                            <td>{{ road['LHRT'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Volume Capacity Ratio</td>
                            <td>{{ road['VCR'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tipe Jalan</td>
                            <td>{{ road['Tipe_Jalan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Kapasitas Mustan Sumbu Terberat (Mst) (Ton)</td>
                            <td>{{ road['Kap_mst'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tanah (%)</td>
                            <td>{{ road['Prs_Pks_Tanah'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Krikil (%)</td>
                            <td>{{ road['Prs_Pks_Krikil'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Aspal/Macadam (%)g</td>
                            <td>{{ road['Prs_Pks_Aspal'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Rigid/Beton (%)</td>
                            <td>{{ road['Prs_Pks_Rgd'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Lokasi Black Spot</td>
                            <td>{{ road['Lks_Black_spot'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tahun Penanganan Terakhir</td>
                            <td>{{ road['Thn_Pena_Takhir'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Jenis Penanganan</td>
                            <td>{{ road['Jns_Pena'] }}</td>
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
                            <td>{{ road['Koord_X_Awal'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">titik koord. y (titik awal jembatan)</td>
                            <td>{{ road['Koord_Y_Awal'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">titik koord. x (titik akhir jembatan)</td>
                            <td>{{ road['Koord_X_Akhir'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">titik koord. y (titik akhir jembatan)</td>
                            <td>{{ road['Koord_Y_Akhir'] }}</td>
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
    road: {
        type: Object,
        default: {}
    }
})
</script>