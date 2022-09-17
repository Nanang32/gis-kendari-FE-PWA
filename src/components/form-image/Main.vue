<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Judul</label>
            <input type="text" class="form-control w-full" placeholder="Input text"  :disabled="loading" />
        </div>
        <div v-if="!loading">
            <input type="file">
            
        </div>
        <div class="text-right mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
                Cancel
            </button>
            <button type="button" class="btn btn-primary w-24" @click="submit" :disabled="loading">
                <LoadingIcon icon="tail-spin" class="w-8 h-8" v-if="loading" />
                Save
            </button>
        </div>
    </div>
</template>
<script setup>
import sendRequest from '@libs/http.js'
import { ref, onMounted } from "vue";

const emit = defineEmits(['submit', 'fileChange'])

function submit() {
    emit('submit');
}

function onFileChange(e) {
    emit('fileChange', e);
}
</script>