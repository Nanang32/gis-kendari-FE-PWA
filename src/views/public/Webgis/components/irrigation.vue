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
                        <td>{{ irrigation['Kl_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Nama Data Dasar</td>
                        <td>{{ irrigation['Nm_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Tahun Data</td>
                        <td>{{ irrigation['Thn_Data'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kondisi</td>
                        <td>{{ irrigation['Kondisi'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">I. Informasi wilayah sungai</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr>
                        <td class="font-semibold">nama wilayah sungai</td>
                        <td>{{ irrigation['Nm_WS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">nama DAS</td>
                        <td>{{ irrigation['Nm_DAS'] }}</td>
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
                        <td>{{ irrigation['Kd_Kem'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode unit organisasi</td>
                        <td>{{ irrigation['Kd_Unor'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode data dasar jenis infrastruktur</td>
                        <td>{{ irrigation['Kd_Dat_Das'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode daerah irigasi</td>
                        <td>{{ irrigation['Kd_WS'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kode infrastruktur</td>
                        <td>{{ irrigation['Kd_Inf'] }}</td>
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
                        <td>{{ irrigation['Provinsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kota/kab.</td>
                        <td>{{ irrigation['Kab_Kota'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kecamatan</td>
                        <td>{{ irrigation['Kecamatan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kel./Desa</td>
                        <td>{{ irrigation['Kel_Desa'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Lokasi</td>
                        <td>{{ irrigation['Lokasi'] }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                <h2 class="text-base text-white  uppercase">IV. data teknis</h2>
            </div>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr class="bg-blue-600">
                        <td class="col-span-2 uppercase">iv.1 daerah irigasi</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jenis daerah irigasi</td>
                        <td>{{ irrigation['Jns_DI'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">bangunan utama</td>
                        <td>{{ irrigation['Bang_Utama'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">nama bangunan utama</td>
                        <td>{{ irrigation['Nm_Bang_Utama'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">sumber air</td>
                        <td>{{ irrigation['Smbr_Air'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Kewenangan</td>
                        <td>{{ irrigation['Kewenangan'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Luas potensial (Ha)</td>
                        <td>{{ irrigation['Luas_Potensi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Luas funsional (Ha)</td>
                        <td>{{ irrigation['Luas_Fungsi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Index pertanaman (IP) rencana</td>
                        <td>{{ irrigation['Ind_Tanam_Renc'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Pola tanam</td>
                        <td>{{ irrigation['Pola_Tnm'] }}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered table-hover capitalize mt-3">
                <tbody>
                    <tr class="bg-blue-600">
                        <td class="col-span-2 uppercase">iv.2 saluran irigasi terbangun</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="font-semibold">panjang saluran induk (km)</td>
                        <td>{{ irrigation['Pjg_Sal_Induk'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi saluran induk</td>
                        <td>{{ irrigation['Kond_Sal_Induk'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">panjang saluran sekunder (km)</td>
                        <td>{{ irrigation['Pjg_Sal_Skndr'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi saluran sekunder</td>
                        <td>{{ irrigation['Kond_Sal_Skndr'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">panjang saluran tersier (km)</td>
                        <td>{{ irrigation['Pjn_Sal_Tersier'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi saluran tersier</td>
                        <td>{{ irrigation['Konds_Sal_Tersier'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">panjang saluran pembuang (km)</td>
                        <td>{{ irrigation['Pjg_Sal_Pembuang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi saluran pembuang</td>
                        <td>{{ irrigation['Kond_Sal_Pembuang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">panjang saluran suplesi (km)</td>
                        <td>{{ irrigation['Pjg_Sal_Suplesi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi saluran suplesi</td>
                        <td>{{ irrigation['Kond_Sal_Suplesi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah kolam pasang (buah)</td>
                        <td>{{ irrigation['Jml_Klm_Pasang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi kolam pasang</td>
                        <td>{{ irrigation['Kond_Klm_Pasang'] }}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered table-hover capitalize mt-3">
                <tbody>
                    <tr class="bg-blue-600">
                        <td class="col-span-2 uppercase">iv.3 bangunan irigasi terbangun</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Jumlah bangunan bagi</td>
                        <td>{{ irrigation['Jml_Bang_Bagi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi bangunan bagi</td>
                        <td>{{ irrigation['Kond_Bang_Bagi'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah bangunan bagi-sadap</td>
                        <td>{{ irrigation['Jml_Bang_Bagi-Sdp'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi bangunan bagi-sadap</td>
                        <td>{{ irrigation['Kond_Bang_Bagi-Sdp'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah bangunan sadap</td>
                        <td>{{ irrigation['Jml_Bang_Sadap'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi bangunan sadap</td>
                        <td>{{ irrigation['Kond_Bang_Sadap'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah bangunan pengatur</td>
                        <td>{{ irrigation['Jml_Bang_Atur'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi bangunan pengatur</td>
                        <td>{{ irrigation['Kond_Bang_Atur'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah siphon</td>
                        <td>{{ irrigation['Jml_Siphon'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi siphon</td>
                        <td>{{ irrigation['Kond_Siphon'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah talang</td>
                        <td>{{ irrigation['Jml_Talang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi talang</td>
                        <td>{{ irrigation['Kond_Talang'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah jembatan</td>
                        <td>{{ irrigation['Jml_Jemb'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi jembatan</td>
                        <td>{{ irrigation['Kond_Jemb'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah bangunan pelengkap</td>
                        <td>{{ irrigation['Jml_Bang_Lgkp'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">kondisi bangunan pelengkap</td>
                        <td>{{ irrigation['Kond_Bang_Lgkp'] }}</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-bordered table-hover capitalize">
                <tbody>
                    <tr class="bg-blue-600">
                        <td class="col-span-2 uppercase">iv.4 kelembagaan</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Jumlah P3A (Perkumpulan petani pemakai air)</td>
                        <td>{{ irrigation['Jml_P3A'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">jumlah GP3A (gabungan perkumpulan petani pemakai air)</td>
                        <td>{{ irrigation['Jml_GP3A'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">Jumlah IP3A (induk perkumpulan petani pemakai air)</td>
                        <td>{{ irrigation['Jml_IP3A'] }}</td>
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
                        <td>{{ irrigation['Koord_X'] }}</td>
                    </tr>
                    <tr>
                        <td class="font-semibold">koordinat y</td>
                        <td>{{ irrigation['Koord_Y'] }}</td>
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
    irrigation: {
        type: Object,
        default: {}
    }
})
</script>