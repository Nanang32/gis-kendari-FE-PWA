<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Form UPTD Lab</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12" >
      <div class="intro-y box p-5"><div class="intro-y col-span-12 lg:col-span-8">
            <input type="text" class="intro-y form-control py-3 px-4 box pr-10" placeholder="Title" v-model="uptdlab.title" />
            <div class="post intro-y overflow-hidden box mt-5">
                <div class="post__tabs nav-tabs flex-col sm:flex-row bg-slate-200 dark:bg-darkmode-800">
                    <Tab :fullWidth="false" class="w-full sm:w-40 py-0 px-0" tag="button">
                        <Tippy content="Fill in the article content" class="tooltip w-full flex items-center justify-center py-4" aria-controls="content" aria-selected="true">
                            <FileTextIcon class="w-4 h-4 mr-2" /> Content
                        </Tippy>
                    </Tab>
                </div>
                <div class="post__content">
                    <div class="p-5">
                        <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                            <div class="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                                <ChevronDownIcon class="w-4 h-4 mr-2" /> Konten
                            </div>
                            <editor v-model="uptdlab.content" :init="{
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
                        <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5">
                            <div class="mt-5">
                                <div class="mt-3">
                                    <label class="form-label">Upload gambar</label>
                                    <div class="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                                        <div class="px-4 pb-4 flex items-center cursor-pointer relative">
                                            <ImageIcon class="w-4 h-4 mr-2" />
                                            <input type="file" class="w-full h-full top-0 left-0 absolute" @change="onImageChange" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3" v-if="uptdlab.key == 'UPTD'">
                                    <label class="form-label">Upload lampiran</label>
                                    <div class="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                                        <div class="px-4 pb-4 flex items-center cursor-pointer relative">
                                            <FileIcon class="w-4 h-4 mr-2" />
                                            <input type="file" class="w-full h-full top-0 left-0 absolute" @change="onAttachmentChange" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" mt-5">
                                <button type="button" class="btn btn-primary w-24" @click="onSubmit">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import sendRequest from '@libs/http.js'
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import Editor from '@tinymce/tinymce-vue'
const route = useRoute();
const router = useRouter();
const loading = ref(false);
let uptdlab = reactive({
    title: null
})

onMounted(async () => {
  loading.value = true;
  const response = await sendRequest({
      method: 'GET',
      url: `/uptdLabs/${route.params.id}`
  });
  if ((response !== null) && (response.status === true)) {
    Object.assign(uptdlab, response.data.uptdlab);
  }
  loading.value = false;
})

function onImageChange(e) {
    uptdlab.image = e.target.files[0];
}

function onAttachmentChange(e) {
    uptdlab.attachment = e.target.files[0];
}

async function onSubmit(){
  loading.value = true;
  const formdata = new FormData();
  formdata.append('_method', 'PUT');
  Object.keys(uptdlab).forEach(key => {
      formdata.append(key, uptdlab[key]);
  });
  const response = await sendRequest({
      method: 'POST',
      url: `/uptdLabs/${route.params.id}`,
      data: formdata
  });
  loading.value = false;
  if ((response !== null) && (response.status === true)) {
    router.push({name: 'admin-uptdlabs'});
  }
}
</script>
