<template>
  <button class="btn btn-primary shadow-md mr-2 mt-2" @click="onButtonClick">Import</button>
  <!-- BEGIN: Delete Confirmation Modal -->
  <Modal
    :show="isShowModal"
    @hidden="isShowModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <textarea class="w-full h-98" v-model="geoJson"></textarea>
      </div>
    </ModalBody>
    <ModalFooter>
      <button class="btn btn-primary shadow-md mr-2 mt-2"  @click="submit">Import</button>
    </ModalFooter>
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
}

async function submit() {
    isLoading.value = true;
    const response = await sendRequest({
        method: 'post',
        url: `${props.segment}/import`,
        data: JSON.parse(geoJson.value)
    });
    if ((response !== null) && (response.status === true)) {
      isShowModal.value = false
    }
}
</script>