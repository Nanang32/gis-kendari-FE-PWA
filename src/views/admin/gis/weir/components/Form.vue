<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">Unit eselon i</label>
                    <input type="text" class="form-control" v-model="weir.unit_eselon_i" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">unit eselon II.A</label>
                    <input type="text" class="form-control" v-model="weir.unit_eselon_iia" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">unit eselon II.B/III.A</label>
                    <input type="text" class="form-control" v-model="weir.unit_eselon_iiia" placeholder="ketik disini..." />
                </div>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar</label>
                    <input type="text" class="form-control" v-model="weir.kelompok_data_dasar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar</label>
                    <input type="text" class="form-control" v-model="weir.nama_data_dasar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="weir.tahun" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" v-model="weir.kondisi" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.nama_wilayah_sungai" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama DAS</label>
                    <input type="text" class="form-control" v-model="weir.daerah_aliran_sungai" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.kode_bidang_pekerjaan_umum" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="weir.kode_data_dasar_jenis_infrastruktur" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur (sesuai ketentuan ditjen SDA)</label>
                    <input type="text" class="form-control" v-model="weir.kode_infrastruktur" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.propinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="weir.kota" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="weir.kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kel./Desa</label>
                    <input type="text" class="form-control" v-model="weir.kelurahan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">lokasi</label>
                    <input type="text" class="form-control" v-model="weir.lokasi" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.irigasi" placeholder="ketik disini..." />
                </div>
                
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lain-lain</label>
                    <input type="text" class="form-control" v-model="weir.lainnya" placeholder="ketik disini..." />
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
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">nama sungai</label>
                    <input type="text" class="form-control" v-model="weir.nama_sungai" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20">jenis bendung</label>
                    <select class="form-select mt-5 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Tetap</option>
                        <option>Gerak</option>
                        <option>Karet</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">tinggi (m)</label>
                    <input type="text" class="form-control" v-model="weir.tinggi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">luas (m)</label>
                    <input type="text" class="form-control" v-model="weir.lebar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20">kondisi</label>
                    <select class="form-select mt-2 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Baik</option>
                        <option>Rusak ringan</option>
                        <option>Rusak berat</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">debit intake musim hujan (m<sup>2</sup>/detik)</label>
                    <input type="text" class="form-control" v-model="weir.debit_intake_musim_hujan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">debit intake musim kemarau (m<sup>2</sup>/detik)</label>
                    <input type="text" class="form-control" v-model="weir.debit_intake_musim_kemarau" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun pembuatan</label>
                    <input type="text" class="form-control" v-model="weir.tahun_pembuatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun rehab terakhir</label>
                    <input type="text" class="form-control" v-model="weir.tahun_rehab_terakhir" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">keterangan</label>
                    <input type="text" class="form-control" v-model="weir.keterangan" placeholder="ketik disini..." />
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
    weir: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

// function onFileChange(e) {
//     emit('fileChange', e);
// }

function getLatLngs(latlngs) {
    props.weir.latlngs = latlngs;
    isShowModal.value = false;
}


</script>