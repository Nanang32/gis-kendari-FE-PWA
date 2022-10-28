<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Tahun</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input tahun"
                :disabled="loading"
            />
        </div>
        <div>
            <label class="form-label">Irigasi</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div>
            <label class="form-label">Bendung</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div>
            <label class="form-label">Air Baku</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div class="border-t border-black mt-5 mb-5"></div>
        <div>
            <label class="form-label">Persiapan</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div>
            <label class="form-label">Pelaksanaan</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div>
            <label class="form-label">Selesai</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div>
            <label class="form-label">Tanpa status</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input dengan angka"
                :disabled="loading"
            />
        </div>
        <div class="text-right mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
            Batal
            </button>
            <button
                type="button"
                class="btn btn-primary w-24"
                @click="submit"
                :disabled="loading"
            >
                <LoadingIcon icon="tail-spin" class="w-8 h-8" v-if="loading" />
                Simpan
            </button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from "vue";
    defineProps({
        loading: {
            type: Boolean,
            default: false
        },
        category: {
            type: Object,
            default: {name: null}
        }
    })
    const emit = defineEmits(['submit'])
    function submit() {
        emit('submit');
    }
</script>