<template>
  <li class="flex items-center my-1">
    <span class="w-1/2 flex-no-shrink">
      <slot />
    </span>
    <span class="progress-bar w-full flex ml-3">
      <span :style="`width: ${progress}%`" class="progress-bar-bar h-2" />
    </span>
  </li>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 50
    }
  }
}
</script>

<style>
.progress-bar {
  background: repeating-linear-gradient(135deg,#ffffff,#ffffff 3px,#dae1e7 3px,#dae1e7 8px);
}

.progress-bar-bar {
  background: repeating-linear-gradient(135deg,#ffffff,#ffffff 3px,#3d4852 3px,#3d4852 8px);
}
</style>
