<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data PJPA</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-pjpa-taskfunction"
        editRouteName="admin-pjpa-taskfunction-edit"
        path="pjpa"
    />
    <WorkingProgramTable
        addRouteName="admin-pjpa-programme"
        editRouteName="admin-pjpa-programme-edit"
        path="pjpa"
    />
    <OrganizationDiagramTable
        addRouteName="admin-pjpa-structure"
        editRouteName="admin-pjpa-structure-edit"
        path="pjpa"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>