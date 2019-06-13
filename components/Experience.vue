<template>
  <div>
    <div v-if="when" class="flex">
      <span class="w-10">
        <span class="text-lg w-8 pl-1 text-grey-darker flex-no-shrink">
          ●
        </span>
      </span>
      <span v-if="when" class="text-sm" v-text="when" />
    </div>
    <div class="flex flex-row py-2">
      <span class="border-l w-8 ml-2 flex-no-shrink d-flex" />
      <div class="pt-4 pb-8">
        <h4 class="font-sans mb-4 uppercase" v-text="title" />
        <p class="uppercase mb-2" v-text="company" />
        <slot />
      </div>
    </div>
    <div v-if="website" class="flex -mt-8">
      <span class="w-10">
        <span class="text-lg w-8 pl-1 text-grey-darker flex-no-shrink">
          <span class="icon-network" />
        </span>
      </span>
      <span class="text-sm">
        <a class="text-grey-darkest no-underline hover:underline" target="_blank" :href="website">{{ website }}</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
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
