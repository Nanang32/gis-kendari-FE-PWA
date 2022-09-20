<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data pjsa</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-pjsa-taskfunction"
        editRouteName="admin-pjsa-taskfunction-edit"
        path="pjsa"
    />
    <WorkingProgramTable
        addRouteName="admin-pjsa-programme"
        editRouteName="admin-pjsa-programme-edit"
        path="pjsa"
    />
    <OrganizationDiagramTable
        addRouteName="admin-pjsa-structure"
        editRouteName="admin-pjsa-structure-edit"
        path="pjsa"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>