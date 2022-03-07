<script setup lang="ts">
  import Experience from './components/Experience.vue'
  import BlockHeader from './components/BlockHeader.vue'
  import Skill from './components/Skill.vue'
  import Anchor from './components/Anchor.vue'
  import Separator from './components/Separator.vue'

  import Photo from './assets/img/photo.png'

</script>

<template>
  <div class="container py-10 mx-auto font-serif">
    <div>
      <div class="items-center md:flex">
        <div class="flex flex-col md:flex-row md:w-3/5 items-center">
          <div class="px-4 text-center shrink-0">
            <span class="overflow-hidden rounded-full">
              <img
                class="overflow-hidden rounded-full"
                :src="Photo"
                alt="Alfonso Bribiesca Espinosa"
              >
            </span>
          </div>
          <div class="px-4">
            <h1 class="py-5 font-sans text-5xl text-center uppercase md:py-0 md:text-left">
              Alfonso Bribiesca
            </h1>
            <p class="font-serif text-2xl italic">
              Full Stack Software Developer
            </p>
          </div>
        </div>

        <div class="px-4 mt-8 md:mt-0 flex-grow">
          <h2 class="font-sans text-sm uppercase">
            Contact me
          </h2>
          
          <separator />
          
          <ul class="list-reset">
            <li class="pt-1 whitespace-nowrap flex items-center">
              <i class="mr-1 icon-envelop" />
              <anchor href="mailto:alfonso@vexilo.com">alfonso@vexilo.com</anchor>
            </li>
            <li class="pt-1 whitespace-nowrap flex items-center">
              <i class="mr-1 icon-twitter" />
              <anchor rel="noopener" target="_blank" href="https://twitter.com/alfonsobries">@alfonsobries</anchor>
            </li>
            <li class="pt-1 whitespace-nowrap flex items-center">
              <i class="mr-1 icon-github" />
              <anchor rel="noopener" target="_blank" href="https://github.com/alfonsobries">/alfonsobries</anchor>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-8 md:flex md:mt-10">
      <div class="px-4 pb-8 md:w-3/5">
        <block-header>
          Experience
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
          title="Software developer"
          when="Aug 2007 - Jan 2009 (2 years) | Mexico City"
          company="Ingenia Agency"
        >
          <p>I worked for Ingenia Agency, one of the top digital agencies in Mexico City, where I developed many successful websites, e-commerce, and web applications for some of the important companies in Mexico City, like Brother Mexico, Coca-Cola, Megacable, etc.</p>
        </experience>

        <block-header class="mt-10" icon="code">
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
          title="Laravel/Node Spreadsheet importer"
          website="https://github.com/alfonsobries/laravel-spreadsheet-importer"
        >
          <p class="mb-2">
            Laravel Package & npm cli tool that works together to read in seconds big spreadsheet files that are impossible to process into a typical PHP app (or consumes a lot of memory & time).
          </p>
        </experience>

        <experience
          title="Others"
          website="https://github.com/alfonsobries"
        >
          <p class="mb-2">
            Explore my Github profile for other open source tools and experiments like this <anchor target="_blank" href="https://vue-minesweeper.vercel.app/">minesweeper clone</anchor> or this <anchor target="_blank" href="https://movjs.vercel.app/">movies search engine</anchor>.
          </p>
        </experience>

        <block-header class="mt-10" icon="graduation-hat">
          Education
        </block-header>

        <experience
          title="Online Courses & Self Learning"
          when="Continual"
        >
          <p class="mb-2">
            I'm used to learning through all kinds of online courses as my primary source of new knowledge. Some of the recent ones or favorites are:
          </p>
          <ul class="list-reset">
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>PHP, Vue, Laravel, & TDD Courses at <anchor rel="noopener" href="https://laracasts.com/" target="_blank">Laracasts</anchor></span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>Refactoring UI by Adam Wathan & Steve Schoger</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>Test-Driven Laravel & Refactoring to Collections by Adam Wathan</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>ES6 for Everyone & React for beginners by Wesbos</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>Complete Guide to Elasticsearch by Bo Andersen (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>Docker and Kubernetes: The Complete Guide by Stephen Grider (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>React - The Complete Guide & Understanding TypeScript by Maximilian Schwarzmüller (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>Modern React with Redux by Stephen Grider (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>Typescript: The Complete Developer's Guide by Stephen Grider (Udemy)</span>
            </li>
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
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
      <div class="px-4 md:w-2/5">
        <block-header icon="hammer-wrench">
          Skills & Knowledge
        </block-header>

        <div>
          <h4 class="mt-1 font-sans uppercase text-gray-dark mb-1">
            <span class="absolute text-3xl icon-medal-first text-gray-500" />
            <span class="pl-8">Im an expert in:</span>
          </h4>
          <p class="pl-8 mb-3 text-sm text-gray-400">
            I have extensive knowledge of the technology, a portfolio, and enough experience to consider myself an expert and even teach others.
          </p>

          <div class="pl-8">
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

            <h4 class="font-sans text-sm uppercase text-gray-500">
              Other Techs & Metodologies
            </h4>
            <ul class="mb-5 list-reset">
              <skill>
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
              <skill>
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

        <div>
          <h4 class="mt-1 font-sans uppercase text-gray-dark">
            <span class="absolute text-3xl icon-medal-second text-gray-500" />
            <span class="pl-8">I have strong knowledge:</span>
          </h4>
          <p class="pl-8 mb-3 text-sm text-gray-400">
            Most of my portfolio are personal projects or experiments, however I feel prepared to take any type of project with this technology.
          </p>
          <div class="ml-8">
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

        <div class="pl-8">
          <h4 class="mb-4 font-sans">
            Personal
          </h4>
          <ul class="mb-5 list-reset">
            <li class="mt-2">
              <i class="mr-1 icon-checkmark" />
              Autodidact
            </li>
            <li class="mt-2">
              <i class="mr-1 icon-checkmark" />
              Responsible
            </li>
            <li class="mt-2">
              <i class="mr-1 icon-checkmark" />
              Proactive
            </li>
            <li class="mt-2">
              <i class="mr-1 icon-checkmark" />
              Honest
            </li>
            <li class="mt-2">
              <i class="mr-1 icon-checkmark" />
              Passionate
            </li>
          </ul>
          <!-- <h4 class="font-sans text-sm uppercase text-gray-500">
            Latest Github Activity
          </h4>
          <github-heatmap><span class="block py-4">Loading...</span></github-heatmap> -->
        </div>

        <block-header class="" icon="bicycle2">
          Hobbies
        </block-header>
        <ul class="pl-10 list-reset">
          <li class="mt-2">
            Runner
          </li>
          <li class="mt-2">
            Triathlon Amateur
          </li>
          <li class="mt-2">
            Bookworm
          </li>
          <li class="mt-2">
            Entrepreneurship
          </li>
        </ul>

        <block-header class="mt-10" icon="network">
          More
        </block-header>

        <ul class="pl-10 list-reset">
          <li class="pt-1 whitespace-no-wrap">
            <i class="mr-1 icon-github" />
            <a class="no-underline text-gray-900 hover:underline" rel="noopener" href="https://github.com/alfonsobries" target="_blank">
              /alfonsobries
            </a>
          </li>
          <li class="pt-1 whitespace-no-wrap">
            <i class="mr-1 icon-earth" />
            <a class="no-underline text-gray-900 hover:underline" rel="noopener" href="https://www.vexilo.com" target="_blank">
              vexilo.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>