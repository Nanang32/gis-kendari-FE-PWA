<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data uptd peralatan konstruksi</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-uptdcontructionequipment-taskfunction"
        editRouteName="admin-uptdcontructionequipment-taskfunction-edit"
        path="peralatan-konstruksi"
    />
    <WorkingProgramTable
        addRouteName="admin-uptdcontructionequipment-programme"
        editRouteName="admin-uptdcontructionequipment-programme-edit"
        path="peralatan-konstruksi"
    />
    <OrganizationDiagramTable
        addRouteName="admin-uptdcontructionequipment-structure"
        editRouteName="admin-uptdcontructionequipment-structure-edit"
        path="peralatan-konstruksi"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>