<template>
  <div>
    <h3 class="flex items-center font-sans uppercase">
      <span :class="[`icon-${icon}`, 'text-2xl', 'w-10', 'text-grey-dark']" />
      <span><slot /></span>
    </h3>
    <hr class="mb-4 ml-10 border-b border-grey-lighter">
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
