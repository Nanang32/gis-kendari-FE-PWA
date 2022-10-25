<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar</label>
                    <input type="text" class="form-control" v-model="river.kelompok_data_dasar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar</label>
                    <input type="text" class="form-control" v-model="river.nama_data_dasar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="river.tahun" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" v-model="river.kondisi" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">I.informasi wilayah sungai</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">nama WS</label>
                    <input type="text" class="form-control" v-model="river.nama_wilayah_sungai" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama DAS</label>
                    <input type="text" class="form-control" v-model="river.daerah_aliran_sungai" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20">Status</label>
                    <select class="form-select mt-2 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Nasional</option>
                        <option>Provinsi</option>
                        <option>Kabupaten/Kota</option>
                        <option>Non Status</option>
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
                    <label class="form-label sm:w-30 capitalize">kode bidang pekerjaan umum</label>
                    <input type="text" class="form-control" v-model="river.kode_bidang_pekerjaan_umum" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="river.kode_data_dasar_jenis_infrastruktur" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur (sesuai ketentuan ditjen SDA)</label>
                    <input type="text" class="form-control" v-model="river.kode_infrastruktur" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="river.propinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="river.kota" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="river.kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kel./Desa</label>
                    <input type="text" class="form-control" v-model="river.kelurahan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">lokasi</label>
                    <input type="text" class="form-control" v-model="river.lokasi" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.manfaat</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30">irigasi (ha)</label>
                    <input type="text" class="form-control" v-model="river.irigasi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">DMI (m<sup>3</sup>/detik)</label>
                    <input type="text" class="form-control" v-model="river.dmi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">PLTA (MWH)</label>
                    <input type="text" class="form-control" v-model="river.plta" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Ternak (ekor)</label>
                    <input type="text" class="form-control" v-model="river.ternak" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lain-lain</label>
                    <input type="text" class="form-control" v-model="river.lainnya" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">v.data teknis</h2>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20">Orde</label>
                    <select class="form-select mt-2 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Orde 1</option>
                        <option>Orde 2</option>
                        <option>Orde 3</option>
                        <option>Orde 4</option>
                        <option>Orde 5</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">luas DAS (km<sup>2</sup>)</label>
                    <input type="text" class="form-control" v-model="river.luas_das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang sungai (km)</label>
                    <input type="text" class="form-control" v-model="river.panjang_sungai" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">lebar maximum (m)</label>
                    <input type="text" class="form-control" v-model="river.lebar_maximum" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kelerengan rata<sup>2</sup></label>
                    <input type="text" class="form-control" v-model="river.kelerengan_rata2" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">q max (m<sup>3</sup>/dtk)</label>
                    <input type="text" class="form-control" v-model="river.q_max" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">keterangan</label>
                    <input type="text" class="form-control" v-model="river.keterangan" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vi.koordinat (decimal degree)</h2>
            </div>
            <div class="p-5 text-center">
                <button type="button" class="btn btn-primary w-24" @click="isShowModal=true">
                    Peta
                </button>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vii.photo dan video</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30">photo</label>
                    <input type="file" class="form-control" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">video</label>
                    <input type="file" class="form-control"/>
                </div>
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
    <ModalMarker :isShowModal="isShowModal" @submit="getLatLngs" />
</template>
<script setup>
import sendRequest from '@libs/http.js'
import ModalMarker from './../../components/ModalMarker.vue'
import { ref, onMounted } from "vue";
const loading = ref(false);
const emit = defineEmits(['submit', 'fileChange'])
const isShowModal = ref(false);

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    river: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

function getLatLngs(latlngs) {
    props.river.latlngs = latlngs;
    isShowModal.value = false;
}

// function onFileChange(e) {
//     emit('fileChange', e);
// }


</script>