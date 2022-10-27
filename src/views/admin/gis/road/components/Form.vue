<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="road.tahun" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">status</label>
                    <select class="form-select mt-2 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Jalan nasional</option>
                        <option>Jalan provinsi</option>
                        <option>Jalan kabupaten/kota</option>
                        <option>Jalan Non status</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">Fungsi</label>
                    <select class="form-select mt-2 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Arteri primer</option>
                        <option>Kolektor 1 primer</option>
                        <option>Kolektor 2 primer</option>
                        <option>Kolektor 3 primer</option>
                        <option>Kolektor 4 primer</option>
                        <option>Lokal primer</option>
                        <option>Lingkungan primer</option>
                        <option>Arteri sekunder</option>
                        <option>Kolektor sekunder</option>
                        <option>Lokal sekunder</option>
                        <option>Lingkungan sekunder</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">Mendukung</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">uraian dukungan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">i.Kodefikasi kelompok data</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">kode kementrian</label>
                    <input type="text" class="form-control" v-model="road.kode_bidang_pekerjaan_umum" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="road.kode_data_dasar_jenis_infrastruktur" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar infrastruktur</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode ruas jalan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Nomor ruas</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="road.propinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="road.kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kelurahan/Desa</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Titik pengenal ruas awal</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Titik pengenal ruas akhir</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kode patok</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">KM awal ruas</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">KM akhir ruas</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">Iii.kondisi (Dalam KM)</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">baik</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">sedang</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">rusak ringan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">rusak berat</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">mantap (Baik + sedang) (%)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Tidak mantap (Rusak ringan + rusak berat) (%)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.data teknis</h2>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
           
            <div class="p-5">
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Panjang datar (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Panjang miring (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Lebar rata - rata perkerasan jalan (m)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lalulintas harian rata- rata tahunan (jumlah kendaraan)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">volume capacity ratio</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">tipe jalan</label>
                    <select class="form-select mt-5 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6<sup>*</sup></option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kapasitas mustan sumbu terberat (mst) (ton)</label>
                     <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <p class="font-medium font-black">tipe perkerasan</p>
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">tanah (%)</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">krikil (%)</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">aspal/macadam (%)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">rigid/beton (%)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lokasi black spot</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun penanganan terakhir</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jenis penanganan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">v.koordinat (decimal degree)</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">titik koord. x (titik awal ruas)</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. y (titik awal ruas)</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. x (titik akhir ruas)</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. y (titik akhir ruas)</label>
                    <input type="text" class="form-control" />
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
                    <input type="file" class="form-control" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">video</label>
                    <input type="file" class="form-control"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">peta</label>
                    <input type="file" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vii.Digitasi</h2>
            </div>
            <div class="p-5 text-center">
                <button type="button" class="btn btn-primary w-24" @click="isShowModal=true">
                    Peta
                </button>
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
import MapDrawer from '../../components/MapDrawer.vue'
import { ref, onMounted } from "vue";
const loading = ref(false);
const emit = defineEmits(['submit', 'fileChange'])
const isShowModal = ref(false);

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    road: {
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
    props.road.latlngs = latlngs;
    isShowModal.value = false;
}


</script>