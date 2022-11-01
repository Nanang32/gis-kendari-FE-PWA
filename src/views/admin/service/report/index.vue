<template>
  <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Data list laporan</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5 mb-20">
      <div class="intro-y col-span-12">
          <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
              <table class="table table-report mt-2">
                  <thead>
                      <tr>
                          <th class="whitespace-nowrap">#</th>
                          <th class="whitespace-nowrap">Judul</th>
                          <th class="text-center whitespace-nowrap">Action</th>
                      </tr>
                  </thead>
                  <tbody v-for="(report, index) in reports" :key="index">
                      <tr>
                          <td> {{ index +1 }}</td>
                          <td> {{ report.title }} </td>
                          <td>
                              <div class="flex justify-center items-center">
                                  <button class="flex items-center mr-3"
                                    @click="onClick('Tolak', report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Tolak
                                  </button>
                                  <button class="flex items-center mr-3"
                                    @click="onClick('Proses', report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Proses
                                  </button>
                                  <button class="flex items-center mr-3"
                                    @click="onClick('Selesai', report.id)">
                                      <EditIcon class="w-4 h-4 mr-1" /> Selesai
                                  </button>
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
import ModalConfirmDelete from "@/components/modal-confirm-delete/Main.vue";
import sendRequest from '@libs/http.js'
import { ref, watch , onMounted } from "vue";
import { useRoute } from "vue-router";

const reports = ref([]);
const page = ref(1);
const perPage = ref(10);
const lastPage = ref(1);
const showDeleteModal = ref(false);
const route = useRoute();

function setPage(newPage){
  page.value = newPage
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