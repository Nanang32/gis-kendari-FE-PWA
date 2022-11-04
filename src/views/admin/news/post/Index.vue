<template>
  <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium mr-auto">Data list posting</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5 mb-20">
      <div class="intro-y col-span-12">
          <button class="btn btn-primary shadow-md mr-2" @click="router.push({ name: 'admin-post-create'})">
              Add new
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
                  <tbody v-for="(post, index) in posts" :key="index">
                      <tr>
                          <td> {{ index +1 }}</td>
                          <td> {{ post.title }} </td>
                          <td>
                              <div class="flex justify-center items-center">
                                  <button class="flex items-center mr-3"
                                    @click="router.push({name: 'admin-post-edit', params: { id: post.id }})">
                                      <EditIcon class="w-4 h-4 mr-1" /> Edit
                                  </button>
                                  <ButtonDelete
                                    :url="`/posts/${post.id}`"
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

const posts = ref([]);
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
      url: '/posts',
      params: {
        page: page
      },
  });
  if ((response !== null) && (response.status === true)) {
    posts.value = response.data.posts.data
    lastPage.value = response.data.posts.last_page
  }
}

watch(page, async (newPage) => {
  await loadData(newPage)
})

onMounted(async()=>{
  await loadData()
});
</script>