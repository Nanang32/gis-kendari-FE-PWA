<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data bina marga</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-binamarga-taskfunction"
        editRouteName="admin-binamarga-taskfunction-edit"
        path="bina-marga"
    />
    <WorkingProgramTable
        addRouteName="admin-binamarga-programme"
        editRouteName="admin-binamarga-programme-edit"
        path="bina-marga"
    />
    <OrganizationDiagramTable
        addRouteName="admin-binamarga-structure"
        editRouteName="admin-binamarga-structure-edit"
        path="bina-marga"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>