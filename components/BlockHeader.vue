<template>
  <div>
    <h3 class="font-sans uppercase flex items-center">
      <span :class="`icon-${icon} text-2xl w-10 text-grey-dark`" />
      <span><slot /></span>
    </h3>
    <hr class="ml-10 border-b border-grey-dark mb-4">
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'briefcase'
    }
  }
}
</script>
