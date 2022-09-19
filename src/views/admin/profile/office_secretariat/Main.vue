<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data Sekertariat dinas</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-secretariat-taskfunction"
        editRouteName="admin-secretariat-taskfunction-edit"
        path="sekretariat-dinas"
    />
    <WorkingProgramTable
        addRouteName="admin-secretariat-programme"
        editRouteName="admin-secretariat-programme-edit"
        path="sekretariat-dinas"
    />
    <OrganizationDiagramTable
        addRouteName="admin-secretariat-structure"
        editRouteName="admin-secretariat-structure-edit"
        path="sekretariat-dinas"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>