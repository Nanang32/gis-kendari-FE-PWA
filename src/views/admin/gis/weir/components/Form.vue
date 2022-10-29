<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="weir.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="weir.Kl_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="weir.Nm_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="weir.Thn_Data" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.Nm_WS" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">nama DAS</label>
                    <input type="text" class="form-control" v-model="weir.Nm_DAS" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.Kd_Kem" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="weir.Kd_Unor" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar jenis infrastruktur</label>
                    <input type="text" class="form-control" v-model="weir.Kd_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode bendung</label>
                    <input type="text" class="form-control" v-model="weir.Kd_WS" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text" class="form-control" v-model="weir.Kd_Inf" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.Provinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="weir.Kab_Kota" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="weir.Kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kel./Desa</label>
                    <input type="text" class="form-control" v-model="weir.Kel_Desa" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">lokasi</label>
                    <input type="text" class="form-control" v-model="weir.Lokasi" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.Irigasi" placeholder="ketik disini..." />
                </div>
                 <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">DMI (M<sup>3</sup>/Detik)</label>
                    <input type="text" class="form-control" v-model="weir.DMI" placeholder="ketik disini..." />
                </div>
                
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lain-lain</label>
                    <input type="text" class="form-control" v-model="weir.Lainnya" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="weir.Nm_Sungai" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20">jenis bendung</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="weir.Jns_Bdg">
                        <option>--Pilih salah satu--</option>
                        <option>Tetap</option>
                        <option>Gerak</option>
                        <option>Karet</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30">tinggi (m)</label>
                    <input type="text" class="form-control" v-model="weir.Tinggi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Lebar (m)</label>
                    <input type="text" class="form-control"  v-model="weir.Lebar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-20">kondisi</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="weir.Kondisi">
                        <option>--Pilih salah satu--</option>
                        <option value="Baik">Baik</option>
                        <option value="Rusak ringan">Rusak ringan</option>
                        <option value="Rusak berat">Rusak berat</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">debit intake musim hujan (m<sup>2</sup>/detik)</label>
                    <input type="text" class="form-control" v-model="weir.Deb_Int_Hjn" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">debit intake musim kemarau (m<sup>2</sup>/detik)</label>
                    <input type="text" class="form-control" v-model="weir.Deb_Int_Kemarau" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun pembuatan</label>
                    <input type="text" class="form-control" v-model="weir.Thn_Buat" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun rehab terakhir</label>
                    <input type="text" class="form-control" v-model="weir.Thn_Rebah" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">keterangan</label>
                    <input type="text" class="form-control" v-model="weir.Ket" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vi.koordinat (decimal degree)</h2>
            </div>
            <div class="p-5 text-center">
               <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Koordinat X titik awal</label>
                    <input type="text" class="form-control" v-model="weir.Koord_X" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Koordinat Y titik awal</label>
                    <input type="text" class="form-control" v-model="weir.Koord_Y" placeholder="ketik disini..." />
                </div>
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
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Peta</label>
                    <input type="file" class="form-control"/>
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12" v-if="!loading">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">viii.Digitasi</h2>
            </div>
            <div class="p-5 text-center">
                <MapDrawer @submit="getLatLngs" :geo_json="weir.geo_json"/>
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
    weir: {
        type: Object,
        default: {}
    }
})

function submit() {
    emit('submit');
}

function getLatLngs(geoJson) {
    props.weir.geo_json = geoJson;
}
</script>