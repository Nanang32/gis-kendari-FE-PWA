<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">Nama data Infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Nama Data Infrastruktur']" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="riverInfrastructure['Tahun Data']" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Kondisi']" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama wilayah sungai</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Nama Wilayah Sungai']" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">Nama DAS</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="riverInfrastructure['Nama DAS']" />
                </div>
                
                
                
            </div>
        </div>
        
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">Ii.lokasi</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20">provinsi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Provinsi']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="riverInfrastructure['KotaKab']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="riverInfrastructure['Kecamatan']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kelurahan/Desa</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['KelDesa']" />
                </div>
                
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.data teknis</h2>
            </div>
            <div class="p-5">
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Jenis bangunan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Jenis Bangunan']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun pelaksanaan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Tahun Pelaksanaan']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">volume</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Volume']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">satuan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Satuan']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">material</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="riverInfrastructure['Material']" />
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
                    <input type="text" class="form-control" v-model="riverInfrastructure['Koordinat X']" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">koordinat y</label>
                    <input type="text" class="form-control" v-model="riverInfrastructure['Koordinat Y']" />
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
                    <input type="text" class="form-control" v-model="riverInfrastructure.Video" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">peta</label>
                    <input type="text" class="form-control" v-model="riverInfrastructure.Peta" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12" v-if="!loading">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vii.Digitasi</h2>
            </div>
            <div class="p-5 text-center">
                <MapDrawer @submit="getLatLngs" :geo_json="riverInfrastructure.geo_json? JSON.parse(riverInfrastructure.geo_json):null"/>
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
    riverInfrastructure: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

function onPhotoChange(e) {
    props.riverInfrastructure.Foto = e.target.files[0];
}

function getLatLngs(geoJson) {
    props.riverInfrastructure.geo_json = geoJson;
}
</script>