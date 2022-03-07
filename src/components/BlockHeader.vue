<template>
  <div>
    <h3 class="flex items-center font-sans uppercase">
      <span class="text-gray-400 mr-4">
        <slot name="icon" />
      </span>    
      
      <span><slot /></span>
    </h3>
    
    <separator class="mb-4 ml-10" />
  </div>
</template>

<script>
import Separator from './Separator.vue'

export default {
  components: {
    Separator,
  },
  props: {
    icon: {
      type: String,
      default: 'briefcase'
    }
  }
}
</script>
