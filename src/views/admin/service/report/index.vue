<template>
  <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto capitalize">Data Pelaporan warga</h2>
       <div class="intro-y flex  items-center mt-8">
            <div class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                <input type="text" class="form-control" placeholder="ketik disini" v-model="query" />
                <button type="button" class="btn btn-warning w-24 ml-3" @click="search">
                    Cari
                </button>
            </div>
        </div>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5 mb-20">
      <div class="intro-y col-span-12">
          <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
              <table class="table table-report mt-2">
                  <thead>
                      <tr>
                          <th class="whitespace-nowrap">#</th>
                          <th class="whitespace-nowrap">Judul</th>
                          <th class="whitespace-nowrap">Jenis Data</th>
                          <th class="whitespace-nowrap">Lokasi</th>
                          <th class="whitespace-nowrap">Foto</th>
                          <th class="text-center whitespace-nowrap">Action</th>
                          <th class="whitespace-nowrap">Status</th>

                      </tr>
                  </thead>
                  <tbody v-for="(report, index) in reports" :key="index">
                      <tr>
                          <td> {{ index +1 }}</td>
                          <td> {{ report.title }} </td>
                          <td> {{ report.infrastructure }} </td>
                          <td><a :href="'https://maps.google.com/?q=' + report.latlng" target="_blank">Klik disini  {{ report.latlng }}</a></td>
                          <td> <a href="" target="_blank">Foto</a> </td>
                          <td>
                              <div class="flex justify-center items-center">
                                  <!-- <button class="flex items-center mr-3"
                                    @click="lihat(report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Lihat
                                  </button> -->
                                  <button class="flex items-center mr-3 text-red-700"
                                    @click="onClick('Tolak', report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Tolak
                                  </button>
                                  <button class="flex items-center mr-3 text-blue-700"
                                    @click="onClick('On Progress', report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Proses
                                  </button>
                                  <button class="flex items-center mr-3 text-green-700"
                                    @click="onClick('Selesai', report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Selesai
                                  </button>
                              </div>
                          </td>
                          <td> status di ambil dari input kolom di atas</td>
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
import sendRequest from '@libs/http.js'
import { ref, watch , onMounted } from "vue";

const reports = ref([]);
const page = ref(1);
const perPage = ref(10);
const lastPage = ref(1);
const loading = ref(true);
const query = ref('');

function setPage(newPage){
  page.value = newPage
} 

async function search() {
    loading.value = true;
    reports.value = [];
    const response = await sendRequest({
        method: 'get',
        url: '/reports',
        params: { search: query.value }
    });
    if ((response !== null) && (response.status === true))
        reports.value = response.data.reports.data
    loading.value = false;
}

async function loadData(page=1){
  const response = await sendRequest({
      method: 'get',
      url: '/reports',
      params: {
        page: page
      },
  });
  if ((response !== null) && (response.status === true)) {
    reports.value = response.data.reports.data
    lastPage.value = response.data.reports.last_page
  }
}

async function onClick (status, id){
  const formdata = new FormData();
  formdata.append('status', status)
  formdata.append('_method', 'PUT')
  const response = await sendRequest({
      method: 'post',
      url: `/reports/${id}`,
      data: formdata
  });
}

watch(page, async (newPage) => {
  await loadData(newPage)
})

onMounted(async()=>{
  await loadData()
});
</script>