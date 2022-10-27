<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..."  v-model="bridge.Kl_Dat_Das"/>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Nm_Dat_Das"/>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" placeholder="ketik disini..."  v-model="bridge.Thn_Data"/>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">status</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Status">
                        <option>--Pilih salah satu--</option>
                        <option value="Nasional tol">Nasional tol</option>
                        <option value="Nasional non tol">Nasional non tol</option>
                        <option value="Provinsi">Provinsi</option>
                        <option value="Kabupaten/Kota">Kabupaten/Kota</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">Fungsi</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Fungsi">
                        <option>--Pilih salah satu--</option>
                        <option value="Arteri primer">Arteri primer</option>
                        <option value="Arteri sekunder">Arteri sekunder</option>
                        <option value="Kolektor primer">Kolektor primer</option>
                        <option value="Kolektor sekunder">Kolektor sekunder</option>
                        <option value="Lokal">Lokal</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">Mendukung</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Mendukung">
                        <option>--Pilih salah satu--</option>
                        <option value="Strategis">Strategis</option>
                        <option value="Non strategis">Non strategis</option>
                        <option value="Kolektor primer">Kolektor primer</option>
                        <option value="Kolektor sekunder">Kolektor sekunder</option>
                        <option value="Lokal">Lokal</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">uraian dukungan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Uraian_Duk" />
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
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Kd_Kem"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Kd_Unor"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar infrastruktur</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="bridge.Kd_Dat_Das"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode jembatan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Kd_Sk_Ruas_Jalan"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Kd_Inf"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Nomor jembatan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Nmr_Ruas_Tol"/>
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
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Provinsi"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="bridge.Kab_Kota"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control"  placeholder="ketik disini..." v-model="bridge.Kecamatan"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kelurahan/Desa</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Kel_Desa"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Dari (Kota)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Dari_Kota"/>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">KM</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Km"/>
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white mr-auto uppercase">Iii.kondisi (Dalam KM)</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-20 capitalize">Kondisi umum jembatan</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Kds_Umum_Jemb">
                        <option>--Pilih salah satu--</option>
                        <option>Baik</option>
                        <option>Sedang</option>
                        <option>Rusak ringan</option>
                        <option>Rusak berat</option>
                        <option>Kritis</option>
                        <option>Runtuh</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Kondisi bangunan atas</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Kds_Bang_Atas">
                        <option>--Pilih salah satu--</option>
                        <option>Baik</option>
                        <option>Sedang</option>
                        <option>Rusak ringan</option>
                        <option>Rusak berat</option>
                        <option>Kritis</option>
                        <option>Runtuh</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kondisi lantai</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Kds_Lantai">
                        <option>--Pilih salah satu--</option>
                        <option>Baik</option>
                        <option>Sedang</option>
                        <option>Rusak ringan</option>
                        <option>Rusak berat</option>
                        <option>Kritis</option>
                        <option>Runtuh</option>
                    </select>>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kondisi bangunan bawah</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="bridge.Kds_Bang_Bawah">
                        <option>--Pilih salah satu--</option>
                        <option>Baik</option>
                        <option>Sedang</option>
                        <option>Rusak ringan</option>
                        <option>Rusak berat</option>
                        <option>Kritis</option>
                        <option>Runtuh</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kondisi daerah aliran sungai</label>
                  <select class="form-select mt-2 sm:mr-2" v-model="bridge.Kds_DAS">
                        <option>--Pilih salah satu--</option>
                        <option>Baik</option>
                        <option>Sedang</option>
                        <option>Rusak ringan</option>
                        <option>Rusak berat</option>
                        <option>Kritis</option>
                        <option>Runtuh</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">tanggal inspeksi detail</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Tgl_Insp_Detail" />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">iv.data teknis</h2>
            </div>
            <div class="p-5">
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Panjang (m)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Pjg_Jemb" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Lebar (m)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Lbr_Jemb" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tipe bangunan atas</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Tipe_Bangn_Atas" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lebar trotoar (m)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Lbr_Trotoar" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jumlah bentang</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Jml_Bentang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">clearennce (Tinggi ruang bebas) (m)</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Clearance" />
                </div>
                 <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun pembangunan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Thn_Bang" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun penanganan terakhir</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Tgn_Pena_Takhir" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Jenis penanganan</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="bridge.Jns_Pena" />
                </div>
                
                
            </div>
        </div>
        
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">v.koordinat (decimal degree)</h2>
            </div>
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">titik koord. x (titik awal jembatan)</label>
                    <input type="text" class="form-control" v-model="bridge.Koord_X_Awal" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. y (titik awal jembatan)</label>
                    <input type="text" class="form-control" v-model="bridge.Koord_Y_Awal" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. x (titik akhir jembatan)</label>
                    <input type="text" class="form-control" v-model="bridge.Koord_X_Akhir" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. y (titik akhir jembatan)</label>
                    <input type="text" class="form-control" v-model="bridge.Koord_Y_Akhir" />
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
        <div class="box col-span-12 lg:col-span-12" v-if="!loading">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vii.Digitasi</h2>
            </div>
            <div class="p-5">
                <MapDrawer @submit="getLatLngs" :geo_json="bridge.geo_json"/>
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
import { ref, onMounted } from "vue";
const emit = defineEmits(['submit', 'fileChange'])

const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    bridge: {
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

function getLatLngs(geoJson) {
    props.bridge.geo_json = geoJson;
}


</script>