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
      <span class="border-l w-8 ml-2 shrink-0 flex dark:border-gray-700" />
      <div class="pt-2 pb-8 print:pt-0">
        <h4 class="mb-2 uppercase text-black dark:text-gray-200 flex space-x-2 justify-start" >
          <template v-if="company">
            <span class="uppercase mb-2" v-text="company" />
            <span class="block text-gray-800 dark:text-gray-200">-</span>
          </template>            

          <span v-text="title" class="text-gray-800 dark:text-gray-200"></span>
        </h4>

        <div class="text-gray-700 dark:text-gray-400 print:text-sm">
          <slot />
        </div>
      </div>
    </div>
    <div v-if="website" class="flex -mt-8">
      <span class="w-10 flex items-start bg-white dark:bg-black py-2 pb-3 -mb-2 -mt-1.5 -ml-1">
        <span class="text-lg w-8 pl-1 text-gray-400 dark:text-gray-500  shrink-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        </span>
      </span>
      <span class="text-sm ml-1">
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
