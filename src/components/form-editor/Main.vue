<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Judul</label>
            <input type="text" class="form-control w-full" placeholder="Input text"
                :disabled="loading" v-model="formData.title"/>
        </div>
        <div v-if="!loading">
            <label class="form-label">Ketik dibawah ini..</label>
            <editor v-model="formData.content" :init="{
                height: 500,
                menubar: true,
                plugins: [

                    'advlist autolink  link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount','lists advlist'
                  ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify| bullist  | outdent indent | ' +
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
import sendRequest from '@libs/http.js'
import Editor from '@tinymce/tinymce-vue'
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