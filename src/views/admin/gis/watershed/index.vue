<template>
  <div class="intro-y flex items-center mt-8">
      <h2 class="text-lg font-medium capitalize mr-auto">Data Daerah Aliran Sungai</h2>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5 mb-20">
      <div class="intro-y col-span-12">
          <button class="btn btn-primary shadow-md mr-2" @click="router.push({name: 'admin-watershed-create'})">
              Tambah
          </button>
          <Export segment="watersheds" />
          <Import segment="watersheds" />
          <div class="intro-y col-span-12 overflow-x-auto">
              <table class="table table-report -mt-2">
                  <thead>
                      <tr>
                          <th class="whitespace-nowrap">#</th>
                          <th class="whitespace-nowrap">Nama</th>
                          <th class="text-center whitespace-nowrap">Action</th>
                      </tr>
                  </thead>
                  <tbody v-for="(watershed, index) in watersheds" :key="index">
                      <tr>
                          <td>{{ index + 1 }}</td>
                          <td>{{ watershed.name }}</td>
                          <td>
                              <div class="flex justify-center items-center">
                                  <button class="flex items-center mr-3" @click="router.push({name: 'admin-watershed-edit', params: { id: watershed.id }})">
                                      <EditIcon class="w-4 h-4 mr-1" />
                                      Edit
                                  </button>
                                  <a class="flex items-center text-danger" href="javascript:;" @click="confirmDelete(watershed.id)">
                                      <Trash2Icon class="w-4 h-4 mr-1" />
                                      Delete
                                  </a>
                              </div>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <Paginator :page="page" :perPage="perPage" :lastPage="lastPage" @goToPage="setPage" />
          <ModalConfirmDelete :isShowModal="showDeleteModal" @confirm="onConfirmDelete" />
      </div>
  </div>
</template>
<script setup>
  import Paginator from "@/components/paginator/Main.vue";
  import ModalConfirmDelete from "@/components/modal-confirm-delete/Main.vue";
  import sendRequest from '@libs/http.js'
  import Export from '../components/Export.vue'
  import Import from '../components/Import.vue'
  import { ref, watch, onMounted } from "vue";
  import { useRouter } from "vue-router";

  const watersheds = ref([]);
  const page = ref(1);
  const perPage = ref(10);
  const lastPage = ref(1);
  const showDeleteModal = ref(false);
  const deleteId = ref(null);
  const router = useRouter();

  function setPage(newPage) {
    page.value = newPage
  }

  function confirmDelete(id) {
    showDeleteModal.value = true
    deleteId.value = id;
  }

  async function onConfirmDelete() {
    const responseDelete = await sendRequest({
        method: 'delete',
        url: `/watersheds/${deleteId.value}`,
    });
    showDeleteModal.value = false
    await loadData(page.value);
  }

  async function loadData(page = 1) {
    const response = await sendRequest({
        method: 'get',
        url: '/watersheds',
        params: {
            page: page
        },
    });
    if ((response !== null) && (response.status === true)) {
        watersheds.value = response.data.watershed.data
        lastPage.value = response.data.watershed.last_page
    }
  }

  watch(page, async (newPage) => {
    await loadData(newPage)
  })

  onMounted(async () => {
    await loadData()
  });
</script>