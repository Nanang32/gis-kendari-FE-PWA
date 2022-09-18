<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Judul</label>
            <input type="text" class="form-control w-full" placeholder="Input text"
                :disabled="loading" v-model="formData.title"/>
        </div>
        <div v-if="!loading">
            <label class="form-label">Ketik dibawah ini..</label>
            <ClassicEditor
                class="form-control w-full"
                placeholder="Input text"
                v-model="formData.content"
            />
            <label for="default-toggle" class="inline-flex relative items-center cursor-pointer mt-3">
                <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Aktif</span>
            </label>
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
defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    formData: {
        type: Object,
        default: {
            title: null,
            content: ''
        }
    }
})

const emit = defineEmits(['submit'])

function submit() {
    emit('submit');
}
</script>