<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Data uptd laboratorium konstruksi</h2>
    </div>
    <TasknFunctionTable
        addRouteName="admin-uptdlabcontruction-taskfunction"
        editRouteName="admin-uptdlabcontruction-taskfunction-edit"
        path="lab-konstruksi"
    />
    <WorkingProgramTable
        addRouteName="admin-uptdlabcontruction-programme"
        editRouteName="admin-uptdlabcontruction-programme-edit"
        path="lab-konstruksi"
    />
    <OrganizationDiagramTable
        addRouteName="admin-uptdlabcontruction-structure"
        editRouteName="admin-uptdlabcontruction-structure-edit"
        path="lab-konstruksi"
    />
</template>
<script setup>
import Paginator from "@/components/paginator/Main.vue";
import WorkingProgramTable from "@/components/working-program-table/Main.vue";
import TasknFunctionTable from "@/components/task-function-table/Main.vue";
import OrganizationDiagramTable from "@/components/organization-diagram-table/Main.vue";
</script>