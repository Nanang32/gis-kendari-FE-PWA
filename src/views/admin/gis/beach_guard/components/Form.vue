<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Kl_Dat_Das" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Nm_Dat_Das" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Thn_Data" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Kondisi" />
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
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Nm_WS" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama DAS</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Nm_DAS" />
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
                    <input type="text" class="form-control" v-model="groin.Kd_Kem" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="groin.Kd_Unor" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="groin.Kd_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode daerah irigasi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Kd_WS" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Kd_Inf" />
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
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Provinsi" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..."  v-model="groin.Kab_Kota" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Kecamatan" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kel./Desa</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Kel_Desa" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Lokasi</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Lokasi" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">Iv.manfaat</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">pelindung pulau terdepan</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Pel_Pulau_Tdpn" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">pelindung jalan raya</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="groin.Pel_Jln_Raya">
                        <option>--Pilih salah satu--</option>
                        <option>Nasional</option>
                        <option>Provinsi</option>
                        <option>Kabupaten/Kota</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">pelindung permukiman</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Pel_Permukiman" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">pelindung tempat wisata</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Pel_Tmpt_Wisata" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Pelindung fasilitas umum</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Pel_Fas_Umum" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Pelindung muara sungai</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Pel_Muara_Sungai" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Lain-lain</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Lainnya" />
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
                <h2 class="text-base text-white  uppercase">iv.1 pengaman pantai</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">Kewenangan</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="groin.Kewenangan">
                        <option>--Pilih salah satu--</option>
                        <option>Pusat</option>
                        <option>Provinsi</option>
                        <option>Kabupaten</option>
                        <option>Kementerian Lain</option>
                    </select>
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">jenis bangunan</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="groin.Jns_Bang">
                        <option>--Pilih salah satu--</option>
                        <option>Tanggul laut</option>
                        <option>Tembok laut</option>
                        <option>Revetment</option>
                        <option>Krib</option>
                        <option>Pemecah gelombang</option>
                        <option>Jeti</option>
                        <option>Pengisian pasir/groin</option>
                    </select>
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">Kepentingan Pantai</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="groin.Kep_Pantai">
                        <option>--Pilih salah satu--</option>
                        <option>International</option>
                        <option>Negara</option>
                        <option>Provinsi</option>
                        <option>Kabupaten</option>
                    </select>
                </div>
                
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Tahun pelaksanaan</label>
                     <input type="text" class="form-control" placeholder="ketik disini..." v-model="groin.Thn_Pelaksanaan" />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.2 fisik</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">panjang</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="groin.Pjg" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">struktur</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="groin.Struktur" >
                        <option>--Pilih salah satu--</option>
                        <option>Rubble</option>
                        <option>Timbunan</option>
                        <option>Kaku</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">material</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="groin.Material" >
                        <option>--Pilih salah satu--</option>
                        <option>Batu</option>
                        <option>Beton</option>
                        <option>Bul beton</option>
                        <option>Pasangan batu</option>
                        <option>Beton bertulang</option>
                        <option>Tanah/Pasir</option>
                    </select>
                </div>
                
            </div>
        </div>
        
        
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">v.koordinat (decimal degree)</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">koordinat x</label>
                    <input type="text" class="form-control" v-model="groin.Koord_X" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">koordinat y</label>
                    <input type="text" class="form-control" v-model="groin.Koord_Y" />
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
                <MapDrawer @submit="getLatLngs" :geo_json="groin.geo_json? JSON.parse(groin.geo_json):null"/>
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
    groin: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

function onPhotoChange(e) {
    props.groin.Foto = e.target.files[0];
}

function onVideoChange(e) {
    props.groin.Video = e.target.files[0];
}

function onMapChange(e) {
    props.groin.Peta = e.target.files[0];
}

function getLatLngs(geoJson) {
    props.groin.geo_json = geoJson;
}


</script>