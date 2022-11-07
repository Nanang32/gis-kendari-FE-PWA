<template>
  <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Data list Video</h2>
       <!-- <div class="intro-y flex  items-center mt-8">
            <div class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                <input type="text" class="form-control" placeholder="ketik disini" />
                <button type="button" class="btn btn-warning w-24 ml-3">
                    Cari
                </button>
            </div>
        </div> -->
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5 mb-20">
      <div class="intro-y col-span-12">
          <button class="btn btn-primary shadow-md mr-2" @click="router.push({ name: 'admin-video-create'})">
              Tambah
          </button>
          <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
              <table class="table table-report mt-2">
                  <thead>
                      <tr>
                          <th class="whitespace-nowrap">#</th>
                          <th class="whitespace-nowrap">Judul</th>
                          <th class="text-center whitespace-nowrap">Action</th>
                      </tr>
                  </thead>
                  <tbody v-for="(video, index) in videos" :key="index">
                      <tr>
                          <td> {{ index +1 }}</td>
                          <td> {{ video.title }} </td>
                          <td>
                              <div class="flex justify-center items-center">
                                  <button class="flex items-center mr-3"
                                    @click="router.push({name: 'admin-video-edit', params: { id: video.id }})">
                                      <EditIcon class="w-4 h-4 mr-1" /> Edit
                                  </button>
                                  <ButtonDelete
                                    :url="`/videos/${video.id}`"
                                    @onDelete="loadData"
                                  />
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <Paginator
            :page="page"
            :perPage="perPage"
            :lastPage="lastPage"
            @goToPage="setPage"
          />
      </div>
  </div>
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import ButtonDelete from "@/components/button-delete/Main.vue"
import sendRequest from '@libs/http.js'
import { ref, watch , onMounted } from "vue";
import { useRouter } from "vue-router";

const videos = ref([]);
const page = ref(1);
const perPage = ref(10);
const lastPage = ref(1);
const router = useRouter();

function setPage(newPage){
  page.value = newPage
} 

async function loadData(page=1){
  const response = await sendRequest({
      method: 'get',
      url: '/videos',
      params: {
        page: page
      },
  });
  if ((response !== null) && (response.status === true)) {
    videos.value = response.data.videos.data
    lastPage.value = response.data.videos.last_page
  }
}

watch(page, async (newPage) => {
  await loadData(newPage)
})

onMounted(async()=>{
  await loadData()
});
</script>