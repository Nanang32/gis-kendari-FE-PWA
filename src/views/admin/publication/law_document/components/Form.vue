<template>
  <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
      <!-- BEGIN: lawDocument Content -->
      <div class="intro-y col-span-12 lg:col-span-8">
        <input type="text" class="intro-y form-control py-3 px-4 box pr-10 my-2" placeholder="Nama" v-model="lawDocument.title" />
        <input type="text" class="intro-y form-control py-3 px-4 box pr-10 my-2" placeholder="Tahun" v-model="lawDocument.year" />
        <div class="lawDocument intro-y overflow-hidden box mt-5">
            <div class="post__content">
                <div class="p-5">
                    <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5">
                        <div class="mt-5">
                          <label for="lawDocument-form-3" class="form-label">Kategori</label>
                          <TomSelect id="lawDocument-form-3" v-model="lawDocument.category_ids" class="w-full" multiple>
                              <option
                                  v-for="category in categories"
                                  :key="category.id"
                                  :value="category.id">
                                  {{ category.name}}
                              </option>
                          </TomSelect>
                        </div>
                        <div class="mt-5">
                          <label class="form-label">Upload berkas</label>
                          <div class="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                              <div class="px-4 pb-4 flex items-center cursor-pointer relative">
                                  <ImageIcon class="w-4 h-4 mr-2" />
                                  <input type="file" class="w-full h-full top-0 left-0 absolute" @change="onFileChange" />
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <!-- END: lawDocument Info -->
  </div>
  <div class=" mt-5">
      <button type="button" class="btn btn-outline-secondary w-24 mr-1">
          Cancel
      </button>
      <button type="button" class="btn btn-primary w-24" @click="submit" :disabled="loading">
          <LoadingIcon icon="tail-spin" class="w-8 h-8" v-if="loading" />
          Save
      </button>
  </div>
</template>
<script setup>
  import sendRequest from '@libs/http.js'
  import { ref, onMounted } from "vue";
  const categories = ref([])
  const loading = ref(false);
  const emit = defineEmits(['submit'])

  const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    },
    lawDocument: {
        type: Object,
        default: {}
    }
  })

  function submit() {
    emit('submit');
  }

  function onFileChange(e) {
    props.lawDocument.file = e.target.files[0];
  }

  async function loadData(){
    const response = await sendRequest({
        method: 'get',
        url: '/categories/all',
    });
    if ((response !== null) && (response.status === true)) {
      categories.value = response.data.categories;
    }
  }

  onMounted(async()=>{
    await loadData()
  });
</script>