<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="irrigation.kelompok_data_dasar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="irrigation.nama_data_dasar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="irrigation.tahun" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">kondisi</label>
                    <input type="text" class="form-control" v-model="irrigation.kondisi" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="irrigation.nama_wilayah_sungai" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama DAS</label>
                    <input type="text" class="form-control" v-model="irrigation.daerah_aliran_sungai" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="irrigation.kode_bidang_pekerjaan_umum" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="irrigation.kode_data_dasar_jenis_infrastruktur" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="irrigation.kode_infrastruktur" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode daerah irigasi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="irrigation.propinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="irrigation.kota" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="irrigation.kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kel./Desa</label>
                    <input type="text" class="form-control" v-model="irrigation.kelurahan" placeholder="ketik disini..." />
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
                    <select class="form-select mt-5 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Permukaan</option>
                        <option>Rawa</option>
                        <option>Tambak</option>
                        <option>Pompa</option>
                        <option>Air tanah</option>
                    </select>
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">bangunan utama</label>
                    <select class="form-select mt-5 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Bendung</option>
                        <option>Pompa</option>
                        <option>Pengambilan bebas</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama bangunan utama</label>
                     <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">sumber air</label>
                     <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">Kewenangan</label>
                    <select class="form-select mt-5 sm:mr-2" aria-label="Default select example">
                        <option>--Pilih salah satu--</option>
                        <option>Pusat</option>
                        <option>Provinsi</option>
                        <option>Kabupaten</option>
                        <option>Kota</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">Luas potensial (Ha)</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">Luas funsional (Ha)</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">Index pertanaman (IP) rencana</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Pola tanam</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
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
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran induk</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran sekunder (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran sekunder</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran tersier (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran tersier</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran pembuang (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran pembuang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">panjang saluran suplesi (km)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi saluran suplesi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah kolam pasang (buah)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi kolam pasang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan bagi</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan bagi-sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan bagi-sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan sadap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan pengatur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan pengatur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah siphon</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi siphon</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah talang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi talang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah jembatan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi jembatan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bangunan pelengkap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kondisi bangunan pelengkap</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah GP3A (gabungan perkumpulan petani pemakai air)</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Jumlah IP3A (induk perkumpulan petani pemakai air)</label>
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
                    <label class="form-label sm:w-30 capitalize">kordinas x</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kordinas y</label>
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
    irrigation: {
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
    props.irrigation.latlngs = latlngs;
    isShowModal.value = false;
}


</script>