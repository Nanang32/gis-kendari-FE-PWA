<template>
    <div class="grid grid-cols-12 mt-5">
        <div class="intro-y col-span-12">
            <button class="btn btn-primary shadow-md mb-2" @click="router.push({ name: addRouteName })">
                Tambah data
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
                    <tbody v-for="(organizationDiagram, index) in organizationDiagrams" :key="index">
                        <tr>
                            <td> {{ index +1 }}</td>
                            <td> {{ organizationDiagram.title }} </td>
                            <td> {{ organizationDiagram.file_path }} </td>

                            <td>
                                Aktif/ tidak
                            </td>
                            <td>
                                <div class="flex justify-center items-center">
                                    <button class="flex items-center mr-3" @click="router.push({name: editRouteName, params: { id: organizationDiagram.id }})">
                                        <EditIcon class="w-4 h-4 mr-1" /> Edit
                                    </button>
                                    <button class="flex items-center text-danger" @click="confirmDelete(organizationDiagram.id)">
                                        <Trash2Icon class="w-4 h-4 mr-1" /> Delete
                                    </button>
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
import { ref, watch, onMounted } from "vue";
import { useRouter } from "vue-router";

const organizationDiagrams = ref([]);
const page = ref(1);
const perPage = ref(10);
const lastPage = ref(1);
const showDeleteModal = ref(false);
const deleteId = ref(null);
const router = useRouter();

const props = defineProps({
    addRouteName: {
        type: String,
    },
    editRouteName: {
        type: String,
    },
    path: {
        type: String,
    }
})

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
        url: `/organizationDiagram/${props.path}/${deleteId.value}`,
    });
    showDeleteModal.value = false
    await loadData(page.value);
}

async function loadData(page = 1) {
    const response = await sendRequest({
        method: 'get',
        url: `/organizationDiagram/${props.path}/`,
        params: {
            page: page
        },
    });
    if ((response !== null) && (response.status === true)) {
        organizationDiagrams.value = response.data.organizationDiagrams.data
        lastPage.value = response.data.organizationDiagrams.last_page
    }
}

watch(page, async (newPage) => {
    await loadData(newPage)
})

onMounted(async () => {
    await loadData()
});
</script>