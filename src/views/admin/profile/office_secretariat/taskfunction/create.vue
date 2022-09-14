<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Add New Post</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      
      <button
        type="button"
        class="btn box mr-2 flex items-center ml-auto sm:ml-0"
      >
        <EyeIcon class="w-4 h-4 mr-2" /> Preview
      </button>
      <Dropdown>
        <DropdownToggle class="btn btn-primary shadow-md flex items-center">
          Save <ChevronDownIcon class="w-4 h-4 ml-2" />
        </DropdownToggle>
        <DropdownMenu class="w-40">
          <DropdownContent>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> As New Post
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> As Draft
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> Export to PDF
            </DropdownItem>
            <DropdownItem>
              <FileTextIcon class="w-4 h-4 mr-2" /> Export to Word
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div class="intro-y col-span-12 lg:col-span-12">
      <Form
        :loading="loading"
        :post="post"
        @submit="onSubmit"
      ></Form>
    </div>
  </div>
</template>

<script setup>
// import sendRequest from '@libs/http.js'
import Form from "./components/Form.vue";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";
const router = useRouter();
const loading = ref(false);
let post = reactive({
    name: null
})

// async function onSubmit(data){
//   loading.value = true;
//   const response = await sendRequest({
//       method: 'post',
//       url: '/facilities',
//       data: facility
//   });
//   if ((response !== null) && (response.status === true)) {
//     router.push({name: 'admin-facility'});
//   }
//   loading.value = false;
// }
</script>
