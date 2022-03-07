<template>
  <div>
    <div v-if="when" class="flex">
      <span class="w-10">
        <span class="text-lg w-8 pl-1 text-gray-600 shrink-0">
          ●
        </span>
      </span>
      <span v-if="when" class="text-sm flex items-center text-gray-400" v-text="when" />
    </div>
    <div class="flex flex-row py-2">
      <span class="border-l w-8 ml-2 shrink-0 flex" />
      <div class="pt-2 pb-8 print:pt-0">
        <h4 class="mb-2 uppercase text-black flex space-x-2 justify-start" >
          <template v-if="company">
            <span class="uspanpercase mb-2" v-text="company" />
            <span class="block text-gray-800">-</span>
          </template>            

          <span v-text="title" class="text-gray-800"></span>
        </h4>

        <div class="text-gray-700 print:text-sm">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="website" class="flex -mt-8">
      <span class="w-10">
        <span class="text-lg w-8 pl-1 text-gray-400 shrink-0">
          <span class="icon-network" />
        </span>
      </span>
      <span class="text-sm">
        <anchor target="_blank" :href="website">{{ website }}</anchor>
      </span>
    </div>
  </div>
</template>

<script>
import Anchor from './Anchor.vue'
export default {
  components: {
    Anchor
  },
  props: {
    title: {
      type: String,
      default: null
    },
    when: {
      type: String,
      default: null
    },
    website: {
      type: String,
      default: null
    },
    company: {
      type: String,
      default: null
    }
  }
}
</script>
