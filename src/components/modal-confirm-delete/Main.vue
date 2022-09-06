<template>
  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal
    :show="isShowModal"
    @hidden="isShowModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
        <div class="text-3xl mt-5">Are you sure?</div>
        <div class="text-slate-500 mt-2">
          Do you really want to delete these records? <br />This process cannot
          be undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="isShowModal = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-danger w-24"
          @click="$emit('confirm')"
        >
          Delete
        </button>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Delete Confirmation Modal -->
</template>

<script setup>
defineProps({
  isShowModal: {
    type: Boolean,
    default: false
  },
})
</script>