<template>
  <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto capitalize">Data Konten uptd laboratorium konstruksi SDABM</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5 mb-20">
      <div class="intro-y col-span-12">
          <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
              <table class="table table-uptdlab mt-2">
                  <thead>
                      <tr>
                          <th class="whitespace-nowrap">#</th>
                          <th class="whitespace-nowrap">Judul</th>
                          <th class="text-center whitespace-nowrap">Action</th>
                      </tr>
                  </thead>
                  <tbody v-for="(uptdlab, index) in uptdlabs" :key="index">
                      <tr>
                          <td> {{ index +1 }}</td>
                          <td> {{ uptdlab.title }} </td>
                          <td>
                              <div class="flex justify-center items-center">
                                  <button class="flex items-center mr-3"
                                    @click="router.push({name: 'admin-uptdlab-edit', params: { id: uptdlab.id }})">
                                      <EditIcon class="w-4 h-4 mr-1" /> Edit
                                  </button>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>
<script setup>
import sendRequest from '@libs/http.js'
import { ref , onMounted } from "vue";
import { useRouter } from "vue-router";

const uptdlabs = ref([]);
const router = useRouter();

async function loadData(){
  const response = await sendRequest({
      method: 'get',
      url: '/uptdLabs',
  });
  if ((response !== null) && (response.status === true)) {
    uptdlabs.value = response.data.uptdlabs
  }
}

onMounted(async()=>{
    await loadData()
});
</script>