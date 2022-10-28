<template>
    <div class="flex items-center p-2 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
        <h2 class="text-white  uppercase">Kementerian pekerjaan umum dan perumahan rakyat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-12">
            <Form :loading="loading" :groin="groin" @submit="onSubmit"></Form>
        </div>
    </div>
</template>
<script setup>
    import sendRequest from '@libs/http.js'
    import Form from "./components/Form.vue";
    import { useRouter } from "vue-router";
    import { ref, reactive } from "vue";
    const router = useRouter();
    const loading = ref(false);
    let groin = reactive({});
    const image = ref('');
    const onFileChange = (e) => {
        image.value = e.target.files[0];
    };


    async function onSubmit(data) {
        loading.value = true;
        const formdata = new FormData();
        Object.keys(groin).forEach(key => {
            formdata.append(key, groin[key]);
        });
        // formdata.append('fid', groin.fid)
        // formdata.append('Kl_Dat_Das', groin.Kl_Dat_Das)
        // formdata.append('Nm_Dat_Das', groin.Nm_Dat_Das)
        // formdata.append('Thn_Data', groin.Thn_Data)
        // formdata.append('Kondisi', groin.Kondisi)
        // formdata.append('Nm_WS', groin.Nm_WS)
        // formdata.append('Nm_DAS', groin.Nm_DAS)
        // formdata.append('Kd_Kem', groin.Kd_Kem)
        // formdata.append('Kd_Unor', groin.Kd_Unor)
        // formdata.append('Kd_Dat_Das', groin.Kd_Dat_Das)
        // formdata.append('Kd_WS', groin.Kd_WS)
        // formdata.append('Kd_Inf', groin.Kd_Inf)
        // formdata.append('Provinsi', groin.Provinsi)
        // formdata.append('Kab_Kota', groin.Kab_Kota)
        // formdata.append('Kecamatan', groin.Kecamatan)
        // formdata.append('Kel_Desa', groin.Kel_Desa)
        // formdata.append('Lokasi', groin.Lokasi)
        // formdata.append('Pel_Pulau_Tdpn', groin.Pel_Pulau_Tdpn)
        // formdata.append('Pel_Jln_Raya', groin.Pel_Jln_Raya)
        // formdata.append('Pel_Permukiman', groin.Pel_Permukiman)
        // formdata.append('Pel_Tmpt_Wisata', groin.Pel_Tmpt_Wisata)
        // formdata.append('Pel_Fas_Umum', groin.Pel_Fas_Umum)
        // formdata.append('Pel_Muara_Sungai', groin.Pel_Muara_Sungai)
        // formdata.append('Lainnya', groin.Lainnya)
        // formdata.append('Kewenangan', groin.Kewenangan)
        // formdata.append('Jns_Bang', groin.Jns_Bang)
        // formdata.append('Kep_Pantai', groin.Kep_Pantai)
        // formdata.append('Thn_Pelaksanaan', groin.Thn_Pelaksanaan)
        // formdata.append('Pjg', groin.Pjg)
        // formdata.append('Struktur', groin.Struktur)
        // formdata.append('Material', groin.Material)
        // formdata.append('Koord_X', groin.Koord_X)
        // formdata.append('Koord_Y', groin.Koord_Y)

        // formdata.append('file', image.value)
        const response = await sendRequest({
            method: 'post',
            url: '/groins',
            data: formdata
        });
        if ((response !== null) && (response.status === true)) {
            router.push({ name: 'admin-groin' });
        }
        loading.value = false;
    }
</script>