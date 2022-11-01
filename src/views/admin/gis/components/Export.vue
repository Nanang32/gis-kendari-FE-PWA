<template>
  <button class="btn btn-primary shadow-md mr-2  mt-2" @click="onButtonClick">Export</button>
  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal
    :show="isShowModal"
    @hidden="isShowModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <textarea class="w-full h-48" :value="JSON.stringify(geoJson)" readonly></textarea>
      </div>
    </ModalBody>
  </Modal>
  <!-- END: Delete Confirmation Modal -->
</template>

<script setup>
import { ref } from "vue";
import sendRequest from '@libs/http.js'
const isShowModal = ref(false);
const isLoading = ref(false);
const geoJson = ref('');

const props = defineProps({
  segment: {
    type: String,
    default: ''
  },
})

function onButtonClick(){
  isShowModal.value = true;
  loadData();
}

async function loadData() {
    isLoading.value = true;
    const response = await sendRequest({
        method: 'get',
        url: `${props.segment}/geoJson`,
    });
    if ((response !== null) && (response.status === true)) {
        geoJson.value = response.data;
    }
}
</script>