<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Judul</label>
            <input type="text" class="form-control w-full" placeholder="Input text" v-model="departmentTask.title" :disabled="loading" />
        </div>
        <div class="mt-3">
            <label class="form-label">Deskripsi</label>
            <ClassicEditor v-model="departmentTask.content" />
        </div>
        <div class="form-check mt-5">
            <input id="vertical-form-3" class="form-check-input" type="checkbox" value="" />
            <label class="form-check-label" for="vertical-form-3">aktif</label>
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
import { ref } from "vue";

defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    departmentTask: {
        type: Object,
        default: { 
            title: '',
            content: ''
        }
    }
})
const emit = defineEmits(['submit'])

function submit() {
    emit('submit');
}
</script>