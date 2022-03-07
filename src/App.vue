<script setup lang="ts">
import Experience from './components/Experience.vue'
import BlockHeader from './components/BlockHeader.vue'
import Skill from './components/Skill.vue'
import Anchor from './components/Anchor.vue'
import Separator from './components/Separator.vue'

import Photo from './assets/img/photo.png'
import Checkmark from './components/icons/Checkmark.vue'

const printResume = () => {
  window.print() 
}
</script>

<template>
  <div class="py-10 mx-auto font-serif container print:max-w-full print:px-4 print:py-8">
    <div>
      <div class="items-center print:flex md:flex">
        <div class="flex flex-col items-center md:flex-row md:w-3/5 print:flex-row print:w-3/5">
          <div class="px-4 text-center shrink-0">
            <span class="overflow-hidden rounded-full">
              <img
                class="overflow-hidden rounded-full w-22 print:w-20"
                :src="Photo"
                alt="Alfonso Bribiesca Espinosa"
              >
            </span>
          </div>
          <div class="px-4">
            <h1 class="py-5 font-sans print:text-3xl md:text-5xl leading-none md:leading-tight text-4xl text-center uppercase md:py-0 md:text-left print:py-0 print:text-left dark:text-gray-200">
              Alfonso Bribiesca
            </h1>
            <p class="font-serif text-2xl italic print:text-xl text-center md:text-left text-gray-500 leading-none dark:text-gray-400">
              Full Stack Software Developer
            </p>
          </div>
        </div>

        <div class="px-4 mt-8 flex-grow md:mt-0 print:mt-0">
          <h2 class="font-sans text-sm uppercase ">
            Contact me
          </h2>
          
          <separator />
          
          <ul class="list-reset mt-2">
            <li class="pt-1 whitespace-nowrap items-center hidden print:flex">              
              <anchor rel="noopener" target="_blank" href="https://alfonsobribiesca.com/" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 print:w-4 print:h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                </svg>
                alfonsobribiesca.com
              </anchor>
            </li>

            <li class="pt-1 whitespace-nowrap flex items-center">
              <anchor href="mailto:alfonso@vexilo.com" class="flex items-center text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 print:w-4 print:h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                alfonso@vexilo.com
              </anchor>
            </li>
            <li class="pt-1 whitespace-nowrap flex items-center">
              <anchor rel="noopener" target="_blank" href="https://twitter.com/alfonsobries" class="flex items-center text-sm">
                <svg class="h-5 w-5 print:w-4 print:h-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path></svg>
                @alfonsobries
              </anchor>
            </li>
            <li class="pt-1 whitespace-nowrap flex items-center">              
              <anchor rel="noopener" target="_blank" href="https://github.com/alfonsobries" class="flex items-center text-sm">
                <svg class="h-5 w-5 print:w-4 print:h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path></svg>
                /alfonsobries
              </anchor>
            </li>


            <li class="pt-1 whitespace-nowrap flex items-center print:hidden mt-2 md:block hidden">
              <anchor button class="flex items-center text-sm" @click="printResume">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd" />
                </svg>
                Print
              </anchor>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-8 md:flex md:mt-10 print:flex">
      <div class="px-4 pb-8 md:w-3/5 print:w-1/2">
        <block-header>
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </template>
          <span class="hidden print:inline">Recent</span> Experience
        </block-header>

        <experience
          title="Software Developer"
          when="Oct 2021 - Present day (~2 year) | Remote"
          company="Ark"
        >
          <p>I work remotely as a Full Stack Software Developer for <anchor href="https://ark.io/" target="_blank">Ark</anchor> a blockchain solutions company working on his different open source and proprietary software products with technologies like Laravel, Alpine.js, and React.</p>
        </experience>

        <experience
          title="Software Developer"
          when="May 2018 - Oct 2021 (~2 years) | Remote"
          company="Surgio"
        >
          <p>I worked remotely as a Full Stack Software Developer for <anchor href="https://www.surgio.com/" target="_blank">Surgio</anchor> a CRM designed for Hospitals where over time I help to increase the user experience by completely renovating the frontend with all kinds of custom Vue components, improving the overall frontend workflow, implementing, even more, features in the backend and work with the team to standardize and improve the full application codebase.</p>
        </experience>

        <experience
          title="Founder & Developer"
          when="Feb 2009 - Dic 2019 (10 years) | Mexico City"
          company="Vexilo"
        >
          <p>I created the brand <anchor href="https://www.vexilo.com/en" target="_blank">Vexilo</anchor> in which I developed more than 50 successful websites and web applications for all kinds of companies of all sizes in Mexico</p>
        </experience>

        <experience
          class="print:hidden"
          title="Software developer"
          when="Aug 2007 - Jan 2009 (2 years) | Mexico City"
          company="Ingenia Agency"
        >
          <p>I worked for Ingenia Agency, one of the top digital agencies in Mexico City, where I developed many successful websites, e-commerce, and web applications for some of the important companies in Mexico City, like Brother Mexico, Coca-Cola, Megacable, etc.</p>
        </experience>

        <div class="break-after-page" />

        <block-header class="mt-10 print:mt-4">
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>  
          </template>

          Open Source & Personal Projects
        </block-header>

        <experience
          title="Vue Tailwind"
          website="https://vue-tailwind.com/"
        >
          <p class="mb-2">
            Created VueTailwind: a popular library of Vue components (+10k visits per month and about 2k stats in Github) with fully configurable theme classes that don't depend on any CSS frameworks but are by default styled with TailwindCSS.
          </p>
        </experience>


        <experience
          title="VariantJS"
          website="https://github.com/variantjs"
          class="print:hidden"
        >
          <p class="mb-2">
            VariantJS is the next version of the VueTailwind package built from scratch for Vue 3 and React.
          </p>
        </experience>

        <experience
          title="Dona.me"
          website="https://www.dona.me/"
        >
          <p class="mb-2">
            Dona.me is a tool that allows nonprofit organizations to create a website to share their work, receive monthly financial contributions, and keep in touch with people who support them.
          </p>
        </experience>

        <experience
          class="print:hidden"
          title="Laravel/Node Spreadsheet importer"
          website="https://github.com/alfonsobries/laravel-spreadsheet-importer"
        >
          <p class="mb-2">
            Laravel Package & npm cli tool that works together to read in seconds big spreadsheet files that are impossible to process into a typical PHP app (or consumes a lot of memory & time).
          </p>
        </experience>

        <experience
          class="hidden print:block"
          website="https://www.alfonsobribiesca.com"
        >
          <p class="mb-2">
            Visit the online version of this resume for more projects.
          </p>
        </experience>

        <experience
          class="print:hidden"
          title="Others"
          website="https://github.com/alfonsobries"
        >
          <p class="mb-2">
            Explore my Github profile for other open source tools and experiments like this <anchor target="_blank" href="https://vue-minesweeper.vercel.app/">minesweeper clone</anchor> or this <anchor target="_blank" href="https://movjs.vercel.app/">movies search engine</anchor>.
          </p>
        </experience>

        <block-header class="mt-10 print:mt-4" icon="graduation-hat">
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </template>
          Education
        </block-header>

        <experience
          title="Online Courses & Self Learning"
          when="Continual"
        >
          <p class="mb-2 print:mb-0">
            I'm used to learning through all kinds of online courses as my primary source of new knowledge. <span class="print:hidden">Some of the recent ones or favorites are:</span> <span class="hidden print:inline">See my online resume for more details.</span>
          </p>
          <ul class="list-reset print:hidden">
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>PHP, Vue, Laravel, & TDD Courses at <anchor rel="noopener" href="https://laracasts.com/" target="_blank">Laracasts</anchor></span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Refactoring UI by Adam Wathan & Steve Schoger</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Test-Driven Laravel & Refactoring to Collections by Adam Wathan</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>ES6 for Everyone & React for beginners by Wesbos</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Complete Guide to Elasticsearch by Bo Andersen (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Docker and Kubernetes: The Complete Guide by Stephen Grider (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>React - The Complete Guide & Understanding TypeScript by Maximilian Schwarzmüller (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Modern React with Redux by Stephen Grider (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Typescript: The Complete Developer's Guide by Stephen Grider (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <Checkmark class="mr-2 w-5 h-5 text-gray-400 mt-1" />

              <span>Ethereum and Solidity: The Complete Developer's Guide by Stephen Grider (Udemy)</span>
            </li>
          </ul>
        </experience>

        <experience
          title="Systems Engineering Degree"
          when="Feb 2014 - Ene 2018 (2 years) | Mexico City"
          company="La Salle University"
        >
          <p>I have a software engineering degree from La Salle University, one of the most recognized private universities in Mexico, where I obtained one of the highest grades of my generation.</p>
        </experience>

      </div>
      <div class="px-4 md:w-2/5 print:w-1/2">
        <block-header>
          <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </template>
          Skills & Knowledge
        </block-header>

        <div>
          <h4 class="mt-1 font-sans uppercase text-gray-600 dark:text-gray-400 mb-1 pl-2 flex">
            <span>I am an expert in:</span>
          </h4>
          <p class="pl-2 mb-3 text-sm text-gray-400 dark:text-gray-500">
            I have extensive knowledge of the technology, a portfolio, and enough experience to consider myself an expert and even teach others.
          </p>

          <div class="pl-2 flex flex-col print:flex-row print:space-x-4">
            <div>
              <h4 class="font-sans text-sm uppercase text-gray-500">
                Frameworks & Tools
              </h4>

              <ul class="mb-5 list-reset">
                <skill>
                  Laravel
                </skill>
                <skill>
                  VueJs
                </skill>
                <skill>
                  React
                </skill>
                <skill>
                  Redux
                </skill>
                <skill>
                  Next.js
                </skill>
                <skill>
                  Alpine.js
                </skill>
                <skill>
                  NuxtJS
                </skill>
                <skill>
                  Vuex
                </skill>
                <skill>
                  Tailwind
                </skill>
                <skill>
                  Bootstrap
                </skill>
              </ul>
            </div>
            <div>
              <h4 class="font-sans text-sm uppercase text-gray-500">
                Programmatic Languages
              </h4>
              <ul class="mb-5 list-reset">
                <skill>
                  PHP
                </skill>
                <skill>
                  SQL
                </skill>
                <skill>
                  JS
                </skill>
                <skill>
                  TypeScript
                </skill>
              </ul>
            </div>
            <div>
              <h4 class="font-sans text-sm uppercase text-gray-500">
                Other Techs & Metodologies
              </h4>
              <ul class="mb-5 list-reset">
                <skill class="print:hidden">
                  MySQL/PostgreSQL
                </skill>
                <skill>
                  Redis
                </skill>
                <skill>
                  TDD
                </skill>
                <skill>
                  Restful APIs
                </skill>
                <skill>
                  Mocha & Test
                </skill>
                <skill>
                  Scrum
                </skill>
                <skill>
                  CI
                </skill>
                <skill class="print:hidden">
                  Sass/Less/Stylus
                </skill>
                <skill>
                  Webpack
                </skill>
                <skill>
                  Linux Servers
                </skill>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h4 class="mt-1 mb-3 font-sans uppercase text-gray-600 dark:text-gray-400 flex pl-2">
            <span>I have strong knowledge:</span>
          </h4>
          <p class="pl-2 mb-3 text-sm text-gray-400 dark:text-gray-500 ">
            Most of my portfolio are personal projects or experiments, however I feel prepared to take any type of project with this technology.
          </p>

          <div class="pl-2 flex flex-col print:flex-row print:space-x-4">
            <div>
              <h4 class="font-sans text-sm uppercase text-gray-500">
                Frameworks & Tools
              </h4>

              <ul class="mb-5 list-reset">
                <skill>
                  Web3
                </skill>
                <skill>
                  Solidity
                </skill>
                <skill>
                  Gridsome
                </skill>
              </ul>
            </div>

            <div>
              <h4 class="font-sans text-sm uppercase text-gray-500">
                Techs & Metodologies
              </h4>
              <ul class="mb-5 list-reset">
                <skill>
                  Blockchain
                </skill>
                <skill>
                  GraphQL
                </skill>
                <skill>
                  Docker
                </skill>
                <skill>
                  Elastic Search
                </skill>
                <skill>
                  AWS
                </skill>
                <skill>
                  Apache Cordova
                </skill>
              </ul>
            </div>

          </div>
        </div>

        <div class="pl-2 print:hidden">
          <h4 class="mb-4 font-sans">
            Personal
          </h4>
          <ul class="mb-5 list-reset">
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />

              Autodidact
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />

              Responsible
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />

              Proactive
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />

              Honest
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />

              Passionate
            </li>
          </ul>
          <!-- <h4 class="font-sans text-sm uppercase text-gray-500">
            Latest Github Activity
          </h4>
          <github-heatmap><span class="block py-4">Loading...</span></github-heatmap> -->
        </div>

        <div class="print:hidden mt-10 print:mt-4">
          <block-header>
            <template v-slot:icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </template>
            
            Hobbies
          </block-header>
          <ul class="pl-2 list-reset">
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />
              Music
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />
              Gadgets
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />
              Runner
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />
              Triathlon Amateur
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />
              Bookworm
            </li>
            <li class="mt-2 flex">
              <Checkmark class="mr-1 w-5 h-5 text-gray-400 mt-0.5" />
              Entrepreneurship
            </li>
          </ul>

          
        </div>
      </div>
    </div>
  </div>
</template>