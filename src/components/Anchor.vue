<template>
  <button v-if="button" type="button" class="text-blue-800 hover:text-blue-700 underline dark:text-blue-500"><slot /></button>
  <a v-else class="text-blue-800 hover:text-blue-700 underline dark:text-blue-500"><slot /></a>
</template>

<script>
export default {
  props:{
    button: {
      type: Boolean,
      default: false
    }
  }
}
</script>