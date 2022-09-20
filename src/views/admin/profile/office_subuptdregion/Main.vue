<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data uptd wilayah</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-uptdregion-taskfunction"
        editRouteName="admin-uptdregion-taskfunction-edit"
        path="uptd-wilayah"
    />
    <WorkingProgramTable
        addRouteName="admin-uptdregion-programme"
        editRouteName="admin-uptdregion-programme-edit"
        path="uptd-wilayah"
    />
    <OrganizationDiagramTable
        addRouteName="admin-uptdregion-structure"
        editRouteName="admin-uptdregion-structure-edit"
        path="uptd-wilayah"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>