<template>
    <div class="grid grid-cols-12 gap-6">
        <div class="box col-span-12 lg:col-span-12">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-red-800">
                <h2 class="text-base text-white  uppercase">form isian data dasar infrastruktur</h2>
            </div>
            <div class="p-5 border">
                <div class="form-inline">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">fid</label>
                    <input type="text" class="form-control" placeholder="ketik disini..." v-model="road.fid" />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">kelompok data dasar infrastruktur</label>
                    <input type="text"  class="form-control" v-model="road.Kl_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">nama data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="road.Nm_Dat_Das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">tahun data</label>
                    <input type="text" class="form-control" v-model="road.Thn_Data" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">status</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="road.Status">
                        <option>--Pilih salah satu--</option>
                        <option>Jalan nasional</option>
                        <option>Jalan provinsi</option>
                        <option>Jalan kabupaten/kota</option>
                        <option>Jalan Non status</option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-2" class="form-label sm:w-30 capitalize">Fungsi</label>
                    <select class="form-select mt-2 sm:mr-2" v-model="road.Fungsi">
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
                    <input type="text"  class="form-control" v-model="road.Mendukung" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label for="horizontal-form-1" class="form-label sm:w-30 capitalize">uraian dukungan</label>
                    <input type="text"  class="form-control" v-model="road.Uraian_Duk" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="road.Kd_Kem" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode unit organisasi</label>
                    <input type="text" class="form-control" v-model="road.Kd_Unor" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode data dasar infrastruktur</label>
                    <input type="text" class="form-control" v-model="road.Kd_Dat_das" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode ruas jalan</label>
                    <input type="text"  class="form-control" v-model="road.Kd_Ruas_Jalan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kode infrastruktur</label>
                    <input type="text"  class="form-control" v-model="road.Kd_Inf" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Nomor ruas</label>
                    <input type="text"  class="form-control" v-model="road.Nmr_Ruas" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="road.Provinsi" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kota/kab.</label>
                    <input type="text" class="form-control" v-model="road.Kab_Kota" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kecamatan</label>
                    <input type="text" class="form-control" v-model="road.Kecamatan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kelurahan/Desa</label>
                    <input type="text"  class="form-control" v-model="road.Kel_Desa" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Titik pengenal ruas awal</label>
                    <input type="text"  class="form-control" v-model="road.Titik_Pgn_Rs_Awal" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Titik pengenal ruas akhir</label>
                    <input type="text"  class="form-control" v-model="road.Titik_Pgn_Rs_Akhir" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">kode patok</label>
                    <input type="text"  class="form-control" v-model="road.Kd_Patok" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">KM awal ruas</label>
                    <input type="text"  class="form-control" v-model="road.Km_Awal_Ruas" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">KM akhir ruas</label>
                    <input type="text"  class="form-control" v-model="road.Km_Akhir_Ruas" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="road.Kds_Baik" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">sedang</label>
                    <input type="text" class="form-control" v-model="road.Kds_Sedang" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">rusak ringan</label>
                    <input type="text"  class="form-control" v-model="road.Kds_Rsk_Ringan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">rusak berat</label>
                    <input type="text"  class="form-control" v-model="road.Kds_Rsk_Berat" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">mantap (Baik + sedang) (%)</label>
                    <input type="text"  class="form-control" v-model="road.Kds_Mantap" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-20 capitalize">Tidak mantap (Rusak ringan + rusak berat) (%)</label>
                    <input type="text"  class="form-control" v-model="road.Kds_Tdk_Mantap" placeholder="ketik disini..." />
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
                    <input type="text"  class="form-control" v-model="road.Pjg_Datar" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Panjang miring (km)</label>
                    <input type="text"  class="form-control" v-model="road.Pjg_Miring" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Lebar rata - rata perkerasan jalan (m)</label>
                    <input type="text"  class="form-control" v-model="road.Lbr_Pks_Jalan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">Lebar rata - rata bahu jalan (m)</label>
                    <input type="text"  class="form-control" v-model="road.Lbr_Bahu_Jalan" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lalulintas harian rata- rata tahunan (jumlah kendaraan)</label>
                    <input type="text"  class="form-control" v-model="road.LHRT" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">volume capacity ratio</label>
                    <input type="text"  class="form-control" v-model="road.VCR" placeholder="ketik disini..." />
                </div>
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">tipe jalan</label>
                    <select class="form-select mt-5 sm:mr-2" v-model="road.Tipe_Jalan">
                        <option>--Pilih salah satu--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6<sup>*</sup></option>
                    </select>
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">kapasitas mustan sumbu terberat (mst) (ton)</label>
                     <input type="text"  class="form-control" v-model="road.Kap_mst" placeholder="ketik disini..." />
                </div>
                
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-6">
            <div class="p-5">
                <p class="font-medium font-black">tipe perkerasan</p>
                <div class="form-inline">
                    <label class="form-label sm:w-30 capitalize">tanah (%)</label>
                    <input type="text" class="form-control" v-model="road.Prs_Pks_Tanah" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">krikil (%)</label>
                    <input type="text" class="form-control" v-model="road.Prs_Pks_Krikil" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">aspal/macadam (%)</label>
                    <input type="text"  class="form-control" v-model="road.Prs_Pks_Aspal" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">rigid/beton (%)</label>
                    <input type="text"  class="form-control" v-model="road.Prs_Pks_Rgd" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">lokasi black spot</label>
                    <input type="text"  class="form-control" v-model="road.Lks_Black_spot" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">tahun penanganan terakhir</label>
                    <input type="text"  class="form-control" v-model="road.Thn_Pena_Takhir" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">jenis penanganan</label>
                    <input type="text"  class="form-control" v-model="road.Jns_Pena" placeholder="ketik disini..." />
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
                    <input type="text" class="form-control" v-model="road.Koord_X_Awal" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. y (titik awal ruas)</label>
                    <input type="text" class="form-control" v-model="road.Koord_Y_Awal" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. x (titik akhir ruas)</label>
                    <input type="text" class="form-control" v-model="road.Koord_X_Akhir" />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">titik koord. y (titik akhir ruas)</label>
                    <input type="text" class="form-control" v-model="road.Koord_Y_Akhir" />
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
                    <input type="text" class="form-control" v-model="road.Video" placeholder="ketik disini..." />
                </div>
                <div class="form-inline mt-5">
                    <label class="form-label sm:w-30 capitalize">peta</label>
                    <input type="text" class="form-control" v-model="road.Peta" placeholder="ketik disini..." />
                </div>
            </div>
        </div>
        <div class="box col-span-12 lg:col-span-12" v-if="!loading">
            <div class="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400 bg-blue-800">
                <h2 class="text-base text-white  uppercase">vii.Digitasi</h2>
            </div>
            <div class="p-5 text-center">
                <MapDrawer @submit="getLatLngs" :geo_json="road.geo_json? JSON.parse(road.geo_json):null"/>
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
        road: {
            type: Object,
            default: {}
        }
    })

    function submit() {
        emit('submit');
    }

    function onPhotoChange(e) {
        props.road.Foto = e.target.files[0];
    }

    function getLatLngs(geoJson) {
        props.road.geo_json = geoJson;
    }
</script>