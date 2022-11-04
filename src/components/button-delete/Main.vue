<template>
  <button class="flex items-center text-danger" @click="showDeleteModal = true">
      <Trash2Icon class="w-4 h-4 mr-1" /> Delete
  </button>
  <Modal
    :show="showDeleteModal"
    @hidden="showDeleteModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
        <div class="text-3xl mt-5">Konfirmasi</div>
        <div class="text-slate-500 mt-2">
          Apa anda yakin untuk menghapus?
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="showDeleteModal = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-danger w-24"
          @click="onConfirmDelete"
        >
          Delete
        </button>
      </div>
    </ModalBody>
  </Modal>
</template>
<script setup>
  import { ref } from "vue";
  import sendRequest from '@libs/http.js';
  const emit = defineEmits(["onDelete"])

  const showDeleteModal = ref(false);
  const props = defineProps({
    url: {
      type: String,
      default: null
    },
  })

  async function onConfirmDelete(){
    await sendRequest({
      method: 'delete',
      url: props.url,
    });
    showDeleteModal.value=false
    emit('onDelete')
  }

</script>