<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Judul</label>
            <input type="text" class="form-control w-full" placeholder="Input text" v-model="departmentVision.title" :disabled="loading" />
        </div>
        <div>
            <label class="form-label">Deskripsi</label>
            <editor v-model="departmentVision.content" :init="{
                height: 500,
                menubar: true,
                plugins: [

                    'advlist autolink  link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | outdent indent | ' +
                  'removeformat | help',
                      }" />
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
import Editor from '@tinymce/tinymce-vue'

defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    departmentVision: {
        type: Object,
        default: { title: null }
    }
})
const emit = defineEmits(['submit'])

function submit() {
    emit('submit');
}
</script>