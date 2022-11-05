<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="irrigation.Kl_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="irrigation.Nm_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="irrigation.Thn_Data" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" v-model="irrigation.Kondisi" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">I.informasi wilayah sungai</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">nama wilayah sungai</label>
                    <input type="text" class="form-control" v-model="irrigation.Nm_WS" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama DAS</label>
                    <input type="text" class="form-control" v-model="irrigation.Nm_DAS" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">ii.Kodefikasi</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">kode kementrian</label>
                    <input type="text" class="form-control" v-model="irrigation.Kd_Kem" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="irrigation.Kd_Unor" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="irrigation.Kd_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode daerah irigasi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kd_WS" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kd_Inf" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">Iii.lokasi</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20">provinsi</label>
                    <input type="text" class="form-control" v-model="irrigation.Provinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="irrigation.Kab_Kota" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="irrigation.Kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kel./Desa</label>
                    <input type="text" class="form-control" v-model="irrigation.Kel_Desa" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Lokasi</label>
                    <input type="text" class="form-control" v-model="irrigation.Lokasi" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.data teknis</h2>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.1 daerah irigasi</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">jenis daerah irigasi</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="irrigation.Jns_DI" >
                        <option>--Pilih salah satu--</option>
                        <option value="Permukaan">Permukaan</option>
                        <option value="Rawa">Rawa</option>
                        <option value="Tambak">Tambak</option>
                        <option value="Pompa">Pompa</option>
                        <option value="Air tanah">Air tanah</option>
                    </select>
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">bangunan utama</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="irrigation.Bang_Utama" >
                        <option>--Pilih salah satu--</option>
                        <option value="Bendung">Bendung</option>
                        <option value="Pompa">Pompa</option>
                        <option value="Pengambilan bebas">Pengambilan bebas</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama bangunan utama</label>
                     <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Nm_Bang_Utama" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">sumber air</label>
                     <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Smbr_Air" />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">Kewenangan</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="irrigation.Kewenangan" >
                        <option>--Pilih salah satu--</option>
                        <option value="">Pusat</option>
                        <option value="">Provinsi</option>
                        <option value="">Kabupaten</option>
                        <option value="">Kota</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">Luas potensial (Ha)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Luas_Potensi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">Luas funsional (Ha)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Luas_Fungsi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">Index pertanaman (IP) rencana</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Ind_Tanam_Renc" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Pola tanam</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Pola_Tnm" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.2 saluran irigasi terbangun</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">panjang saluran induk (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Pjg_Sal_Induk" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran induk</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Sal_Induk" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran sekunder (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Pjg_Sal_Skndr" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran sekunder</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Sal_Skndr" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran tersier (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Pjn_Sal_Tersier" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran tersier</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Konds_Sal_Tersier" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran pembuang (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Pjg_Sal_Pembuang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran pembuang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Sal_Pembuang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran suplesi (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Pjg_Sal_Suplesi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran suplesi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Sal_Suplesi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah kolam pasang (buah)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Klm_Pasang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi kolam pasang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Klm_Pasang" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.3 bangunan irigasi terbangun</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">Jumlah bangunan bagi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Bang_Bagi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan bagi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Bang_Bagi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan bagi-sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation['Jml_Bang_Bagi-Sdp']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan bagi-sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation['Kond_Bang_Bagi-Sdp']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Bang_Sadap" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Bang_Sadap" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan pengatur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Bang_Atur" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan pengatur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Bang_Atur" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah siphon</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Siphon" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi siphon</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Siphon" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah talang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Talang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi talang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Talang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah jembatan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Jemb" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi jembatan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Jemb" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan pelengkap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_Bang_Lgkp" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan pelengkap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Kond_Bang_Lgkp" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.4 kelembagaan</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">Jumlah P3A (Perkumpulan petani pemakai air)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_P3A" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah GP3A (gabungan perkumpulan petani pemakai air)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_GP3A" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Jumlah IP3A (induk perkumpulan petani pemakai air)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="irrigation.Jml_IP3A" />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">v.koordinat (decimal degree)</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">kordinas x</label>
                    <input type="text" class="form-control" v-model="irrigation.Koord_X" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kordinas y</label>
                    <input type="text" class="form-control" v-model="irrigation.Koord_Y" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vi.photo dan video</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30">photo</label>
                    <input type="file" class="form-control" @change="onPhotoChange"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">video</label>
                    <input type="file" class="form-control" @change="onVideoChange"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">peta</label>
                    <input type="file" class="form-control" @change="onMapChange"/>
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12" v-if="!loading">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vii.Digitasi</h2>
            </div>
            <div class="p-5 text-center">
                <MapDrawer @submit="getLatLngs" :geo_json="irrigation.geo_json? JSON.parse(irrigation.geo_json):null"/>
            </div>
        </div>
    </div>
    <div class=" mt-5">
        <button type="button" class="btn btn-outline-secondary w-24 mr-1">
            Batal
        </button>
        <button type="button" class="btn btn-primary w-24" @click="submit">
            <!-- <LoadingIcon icon="tail-spin" class="w-8 h-8" v-if="loading" /> -->
            Simpan
        </button>
    </div>
</template>
<script setup>
import MapDrawer from '../../components/MapDrawer.vue'
const emit = defineEmits(['submit'])

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    irrigation: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

function onPhotoChange(e) {
    props.irrigation.Foto = e.target.files[0];
}

function onVideoChange(e) {
    props.irrigation.Video = e.target.files[0];
}

function onMapChange(e) {
    props.irrigation.Peta = e.target.files[0];
}

function getLatLngs(geoJson) {
    props.irrigation.geo_json = geoJson;
}


</script>