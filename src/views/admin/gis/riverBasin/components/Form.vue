<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverBasin.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="riverBasin.Kl_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="riverBasin.Nm_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="riverBasin.Thn_Data" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" v-model="riverBasin.Kondisi" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">I.informasi wilayah sungai</h2>
            </div>
            <div class="p-5">
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20">Status</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="riverBasin.Status">
                        <option>--Pilih salah satu--</option>
                        <option value="Lintas negara">Lintas negara</option>
                        <option value="Lintas provinsi">Lintas provinsi</option>
                        <option value="Strategis nasional">Strategis nasional</option>
                        <option value="Lintas kabupaten/kota">Lintas kabupaten/kota</option>
                        <option value="Dalam satu kabupaten/kota">Dalam satu kabupaten/kota</option>
                    </select>
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
                    <input type="text" class="form-control" v-model="riverBasin.Kd_Kem" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="riverBasin.Kd_Unor" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="riverBasin.Kd_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode wilayah sungai</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverBasin.Kd_WS" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" v-model="riverBasin.Kd_Inf" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode wilayah sungai berdasarkan permen</label>
                    <input type="text" v-model="riverBasin.Kd_WS_Permen" />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">Iii.lokasi</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20">propinsi</label>
                    <input type="text" class="form-control" v-model="riverBasin.Provinsi" placeholder="Ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="riverBasin.Kab_kota" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.Data teknis</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30">Jumlah DAS</label>
                    <input type="text" v-model="riverBasin.Jml_DAS" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Nama DAS</label>
                    <input type="text" class="form-control" v-model="riverBasin.Nm_DAS" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">v.Photo & video</h2>
            </div>
            <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30">photo</label>
                    <input type="file" class="form-control" @change="onPhotoChange"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">video</label>
                    <input type="text" class="form-control" v-model="riverBasin.Video" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">peta</label>
                    <input type="text" class="form-control" v-model="riverBasin.Peta" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        </div>
        
        <div class="box col-span-12 lg:col-span-12" v-if="!loading">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vi.Digitasi</h2>
            </div>
            <div class="p-5 text-center">
                <MapDrawer @submit="getLatLngs" :geo_json="riverBasin.geo_json? JSON.parse(riverBasin.geo_json):null"/>
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
    riverBasin: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

function onPhotoChange(e) {
    props.riverBasin.Foto = e.target.files[0];
}

function getLatLngs(geoJson) {
    props.riverBasin.geo_json = geoJson;
}
</script>