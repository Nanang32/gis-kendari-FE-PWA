<template>
  <!-- BEGIN: Pagination -->
  <div
    class="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center"
  >
    <nav class="w-full sm:w-auto sm:mr-auto">
      <ul class="pagination">
        <li class="page-item" v-if="page > 1"> <!-- goto first item -->
          <a class="page-link">
            <ChevronsLeftIcon class="w-4 h-4" />
          </a>
        </li>
        <li class="page-item"  v-if="page > 1"> <!-- goto prev item -->
          <a class="page-link">
            <ChevronLeftIcon class="w-4 h-4" />
          </a>
        </li>
        <li
          v-for="currentPage in lastPage"
          v-bind:key="currentPage"
          class="page-item"
        >
          <a class="page-link" @click="$emit('goToPage', currentPage)">{{ currentPage }}</a>
        </li>
        <!-- <li class="page-item active">
          <a class="page-link">2</a>
        </li>
        <li class="page-item">
          <a class="page-link">3</a>
        </li> -->
        <li class="page-item" v-if="page < lastPage"> <!-- goto next item -->
          <a class="page-link" @click="$emit('goToPage', page + 1)">
            <ChevronRightIcon class="w-4 h-4" />
          </a>
        </li>
        <li class="page-item" v-if="page < lastPage"> <!-- goto last item -->
          <a class="page-link" @click="$emit('goToPage', lastPage)">
            <ChevronsRightIcon class="w-4 h-4" />
          </a>
        </li>
      </ul>
    </nav>
    <select class="w-20 form-select box mt-3 sm:mt-0">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </div>
  <!-- END: Pagination -->
</template>

<script setup>
defineProps({
  perPage: {
    type: Number,
    default: 10
  },
  page: {
    type: Number,
    default: 1
  },
  lastPage: {
    type: Number,
    default: 1
  }
})
</script>