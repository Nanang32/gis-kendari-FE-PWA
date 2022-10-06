<template>
    <div class="intro-y box p-5">
        <div>
            <label class="form-label">Category name</label>
            <input
                type="text"
                class="form-control w-full"
                placeholder="Input text"
                v-model="category.name"
                :disabled="loading"
            />
        </div>
        <div class="text-right mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
            Cancel
            </button>
            <button
                type="button"
                class="btn btn-primary w-24"
                @click="submit"
                :disabled="loading"
            >
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