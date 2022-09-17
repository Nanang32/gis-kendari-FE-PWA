<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data Sekertariat dinas</h2>
    </div>
    <div class="grid grid-cols-12 mt-5">
        <div class="intro-y col-span-12">
            <button class="btn btn-primary shadow-md mb-2" @click="router.push({ name: 'admin-secretariat-taskfunction'})">
                Tambah data
            </button>
            <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
                <h3 class="text-sm text-center font-black p-2">Tugas dan fungsi</h3>
                <table class="table table-report mt-2">
                    <thead>
                        <tr>
                            <th class="whitespace-nowrap">#</th>
                            <th class="whitespace-nowrap">Judul</th>
                            <th class="whitespace-nowrap">status</th>
                            <th class="text-center whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lorem</td>
                            <td>
                                Aktif/ tidak
                            </td>
                            <td>
                                <div class="flex justify-center items-center">
                                    <button class="flex items-center mr-3">
                                        <EditIcon class="w-4 h-4 mr-1" /> Edit
                                    </button>
                                    <a class="flex items-center text-danger">
                                        <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- <Paginator
        :page="page"
        :perPage="perPage"
        :lastPage="lastPage"
        @goToPage="setPage"
      />
      <ModalConfirmDelete 
        :isShowModal="showDeleteModal"
        @confirm="onConfirmDelete"
      /> -->
        </div>
    </div>
    <div class="grid grid-cols-12 mt-5">
        <div class="intro-y col-span-12">
            <button class="btn btn-primary shadow-md mb-2" @click="router.push({ name: 'admin-secretariat-programme'})">
                Add new
            </button>
            <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
                <h3 class="text-sm text-center font-black p-2">Program</h3>
                <table class="table table-report mt-2">
                    <thead>
                        <tr>
                            <th class="whitespace-nowrap">#</th>
                            <th class="whitespace-nowrap">Kontent</th>
                            <th class="whitespace-nowrap">status</th>
                            <th class="text-center whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lorem</td>
                            <td>
                                Aktif/ tidak
                            </td>
                            <td>
                                <div class="flex justify-center items-center">
                                    <button class="flex items-center mr-3">
                                        <EditIcon class="w-4 h-4 mr-1" /> Edit
                                    </button>
                                    <a class="flex items-center text-danger">
                                        <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- <Paginator
        :page="page"
        :perPage="perPage"
        :lastPage="lastPage"
        @goToPage="setPage"
      />
      <ModalConfirmDelete 
        :isShowModal="showDeleteModal"
        @confirm="onConfirmDelete"
      /> -->
        </div>
    </div>
    <div class="grid grid-cols-12 mt-5">
        <div class="intro-y col-span-12">
            <button class="btn btn-primary shadow-md mb-2" @click="router.push({ name: 'admin-secretariat-structure'})">
                Add new
            </button>
            <div class="intro-y box col-span-12 overflow-auto lg:overflow-visible">
                <h3 class="text-sm text-center font-black p-2">Struktur</h3>
                <table class="table table-report mt-2">
                    <thead>
                        <tr>
                            <th class="whitespace-nowrap">#</th>
                            <th class="whitespace-nowrap">File</th>
                            <th class="whitespace-nowrap">status</th>
                            <th class="text-center whitespace-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lorem</td>
                            <td>
                                Aktif/ tidak
                            </td>
                            <td>
                                <div class="flex justify-center items-center">
                                    <button class="flex items-center mr-3">
                                        <EditIcon class="w-4 h-4 mr-1" /> Edit
                                    </button>
                                    <a class="flex items-center text-danger">
                                        <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                                    </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- <Paginator
        :page="page"
        :perPage="perPage"
        :lastPage="lastPage"
        @goToPage="setPage"
      />
      <ModalConfirmDelete 
        :isShowModal="showDeleteModal"
        @confirm="onConfirmDelete"
      /> -->
        </div>
    </div>
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import ModalConfirmDelete from "@/components/modal-confirm-delete/Main.vue";
import sendRequest from '@libs/http.js'
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const facilities = ref([]);
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
        url: `/facilities/${deleteId.value}`,
    });
    showDeleteModal.value = false
    await loadData(page.value);
}

async function loadData(page = 1) {
    const response = await sendRequest({
        method: 'get',
        url: '/facilities',
        params: {
            page: page
        },
    });
    if ((response !== null) && (response.status === true)) {
        facilities.value = response.data.facilities.data
        lastPage.value = response.data.facilities.last_page
    }
}

watch(page, async (newPage) => {
    await loadData(newPage)
})

onMounted(async () => {
    await loadData()
});
</script>