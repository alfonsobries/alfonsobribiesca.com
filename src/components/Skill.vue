<script setup>
import Checkmark from './icons/Checkmark.vue'
</script>

<template>
  <li class="flex items-center my-1 print:text-xs">
    <span class="w-1/2 shrink-0 whitespace-nowrap flex">
      <Checkmark class="mr-1 w-5 h-5 dark:text-gray-700 mt-0.5" />

      <slot />
    </span>
  </li>
</template>


