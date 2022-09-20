<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Judul</label>
            <input type="text" class="form-control w-full" placeholder="Input text" v-model="departmentOrganization.title" :disabled="loading" />
        </div>
        <div class="m-1">
            <label class="form-label">Feature Image</label>
            <input type="file" class="form-control w-full" :disabled="loading" @change="onFileChange" />
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
    departmentOrganization: {
        type: Object,
        default: { title: null }
    }
})
const emit = defineEmits(['submit'])

function submit() {
    emit('submit');
}
</script>