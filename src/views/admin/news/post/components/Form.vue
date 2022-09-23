<template>
    <div class="pos intro-y grid grid-cols-12 gap-5 mt-5">
        <!-- BEGIN: Post Content -->
        <div class="intro-y col-span-12 lg:col-span-8">
            <input type="text" class="intro-y form-control py-3 px-4 box pr-10" placeholder="Title" />
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
                        <div class="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5">
                            <div class="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                                <ChevronDownIcon class="w-4 h-4 mr-2" /> kategori , gambar, publish
                            </div>
                            <div class="mt-5">
                                <div class="mt-3">
                                    <label for="post-form-3" class="form-label">Kategori</label>
                                    <TomSelect id="post-form-3" v-model="categories" class="w-full" multiple>
                                        <option value="1">Horror</option>
                                        <option value="2">Sci-fi</option>
                                        <option value="3">Action</option>
                                        <option value="4">Drama</option>
                                        <option value="5">Comedy</option>
                                    </TomSelect>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div class="mt-3">
                                    <label class="form-label">Upload gambar</label>
                                    <div class="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                                        <div class="px-4 pb-4 flex items-center cursor-pointer relative">
                                            <ImageIcon class="w-4 h-4 mr-2" />
                                            <input type="file" class="w-full h-full top-0 left-0 absolute" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div class="mt-3">
                                    <label for="post-form-2" class="form-label">Tgl. publish</label>
                                    <Litepicker id="post-form-2" v-model="salesReportFilter" :options="{
                                      autoApply: false,
                                      showWeekNumbers: true,
                                      dropdowns: {
                                        minYear: 1990,
                                        maxYear: null,
                                        months: true,
                                        years: true,
                                      },
                                    }" class="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- END: Post Info -->
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
import { ref } from "vue";
import Editor from '@tinymce/tinymce-vue'

const categories = ref(["1", "2"]);
const tags = ref(["1", "2"]);
const salesReportFilter = ref("");
const editorData = ref("<p>Content of the editor.</p>");
</script>