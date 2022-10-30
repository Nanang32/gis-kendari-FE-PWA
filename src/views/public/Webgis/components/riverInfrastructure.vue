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
                            <td class="font-semibold">Nama Data Infrastruktur</td>
                            <td>{{ riverInfrastructure['Nama Data Infrastruktur'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tahun Data</td>
                            <td>{{ riverInfrastructure['Tahun Data'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Kondisi</td>
                            <td>{{ riverInfrastructure['Kondisi'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Nama Wilayah Sungai
                            </td>
                            <td>{{ riverInfrastructure['Nama Wilayah Sungai'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Nama DAS</td>
                            <td>{{ riverInfrastructure['Nama DAS'] }}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">I. lokasi</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">provinsi</td>
                            <td>{{ riverInfrastructure['Provinsi'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kota/kab.</td>
                            <td>{{ riverInfrastructure['KotaKab'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kecamatan</td>
                            <td>{{ riverInfrastructure['Kecamatan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">kelurahan/Desa</td>
                            <td>{{ riverInfrastructure['KelDesa'] }}</td>
                        </tr>
                        
                    </tbody>
                </table>
                
                <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800 mt-3">
                    <h2 class="text-base text-white  uppercase">II. data teknis</h2>
                </div>
                <table class="table table-bordered table-hover capitalize">
                    <tbody>
                        <tr>
                            <td class="font-semibold">Jenis Bangunan</td>
                            <td>{{ riverInfrastructure['Jenis Bangunan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Tahun Pelaksanaan
</td>
                            <td>{{ riverInfrastructure['Tahun Pelaksanaan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Volume</td>
                            <td>{{ riverInfrastructure['Volume'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Satuan
                            </td>
                            <td>{{ riverInfrastructure['Satuan'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Material</td>
                            <td>{{ riverInfrastructure['Material'] }}</td>
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
                            <td>{{ riverInfrastructure['Koordinat X'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">koordinat y</td>
                            <td>{{ riverInfrastructure['Koordinat Y'] }}</td>
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
                            <td>{{ riverInfrastructure['Foto_file_path'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">Video</td>
                            <td>{{ riverInfrastructure['Video_file_path'] }}</td>
                        </tr>
                        <tr>
                            <td class="font-semibold">File</td>
                            <td>{{ riverInfrastructure['Peta_file_path'] }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    riverInfrastructure: {
        type: Object,
        default: {}
    }
})
</script>