<template>
  <div class="container mx-auto py-10 font-serif">
    <div>
      <div class="md:flex md:-mx-4 items-center">
        <div class="px-4 flex-no-shrink text-center">
          <span class="rounded-full overflow-hidden">
            <img
              class="rounded-full overflow-hidden"
              src="photo.png"
              alt="Alfonso Bribiesca Espinosa"
            >
          </span>
        </div>
        <div class="px-4">
          <h1 class="uppercase font-sans text-5xl text-center py-5 md:py-0 md:text-left">
            Alfonso Bribiesca
          </h1>
          <p class="font-serif text-2xl italic">
            Full Stack Software Developer & Entrepeneur
          </p>
        </div>

        <div class="px-4 mt-8 md:mt-0">
          <h2 class="text-sm uppercase font-sans">
            Contact me
          </h2>
          <hr class="border-b">
          <ul class="list-reset">
            <li class="pt-1 whitespace-no-wrap">
              <i class="icon-envelop mr-1" />
              <a class="text-grey-darkest no-underline hover:underline" href="mailto:alfonso@vexilo.com">
                alfonso@vexilo.com
              </a>
            </li>
            <li class="pt-1 whitespace-no-wrap">
              <i class="icon-skype mr-1" />
              <a class="text-grey-darkest no-underline hover:underline" href="skype:alfonso.bribiesca">
                alfonso.bribiesca
              </a>
            </li>
            <li class="pt-1 whitespace-no-wrap">
              <i class="icon-twitter mr-1" />
              <a class="text-grey-darkest no-underline hover:underline" rel="noopener" target="_blank" href="https://twitter.com/alfonsobries">
                @alfonsobries
              </a>
            </li>
            <li class="pt-1 whitespace-no-wrap">
              <i class="icon-github mr-1" />
              <a class="text-grey-darkest no-underline hover:underline" rel="noopener" target="_blank" href="https://github.com/alfonsobries">
                /alfonsobries
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="md:flex md:-mx-4 mt-8 md:mt-20">
      <div class="md:w-3/5 px-4 pb-8">
        <block-header>
          Experience
        </block-header>

        <experience
          title="Software Developer"
          when="May 2018 - Present day (2 years) | Remote"
          company="Surgio"
        >
          <p>I work remotely as a Full Stack Software Developer for <a href="https://www.surgio.com/" target="_blank">Surgio</a> a CRM designed for Hospitals where over time I help to increase the user experience by completely renovate the frontend with all kind of custom Vue components, improve the overall frontend workflow, implement even more features in the backed and work with the team to standardize the full application codebase.</p>
        </experience>

        <experience
          title="Founder & Developer"
          when="Feb 2009 - Present day (10 years) | Mexico City"
          company="Vexilo"
        >
          <p>I created the brand <a href="https://www.vexilo.com/en" target="_blank">Vexilo</a> in which name I developed more than 50 successfully websites and web applications for all kinds of companies of all sizes in Mexico.</p>
        </experience>

        <experience
          title="Software developer"
          when="Aug 2007 - Jan 2009 (2 years) | Mexico City"
          company="Ingenia Agency"
        >
          <p>Worked for Ingenia Agency one of the top digital agencies in Mexico City where I developed a lot of successful websites, e-commerce and web applications for some of the important companies in Mexico City, like Brother Mexico, Coca-Cola, Megacable, etc.</p>
        </experience>

        <block-header class="mt-10" icon="code">
          Open Source & Personal Projects
        </block-header>

        <experience
          title="Vue Tailwind"
          website="https://vue-tailwind.com/"
        >
          <p class="mb-2">
            VueTailwind is a library of Vue components with fully configurable theme classes that don't depend on any CSS frameworks but are by default styled with TailwindCSS.
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
          title="Laravel-Nuxt-Tailwind"
          website="https://github.com/alfonsobries/laravel-nuxt-tailwind"
        >
          <p class="mb-2">
            Laravel with nuxtJs styled with Tailwind Boilerplate
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
            I'm used to taking all kind of online courses as my main source of new knowledge. Some of my favourites include:
          </p>
          <ul class="list-reset">
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>PHP, Vue, Laravel, & TDD Courses at <a class="text-grey-darkest" rel="noopener" href="https://laracasts.com/" target="_blank">Laracasts</a></span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Refactoring UI by Adam Wathan & Steve Schoger</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Test-Driven Laravel & Refactoring to Collections by Adam Wathan</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>ES6 for Everyone & React for beginners by Wesbos</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Complete Guide to Elasticsearch by Bo Andersen (Udemy)</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Docker and Kubernetes: The Complete Guide by Stephen Grider (Udemy)</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Advanced React & GraphQL by Wesbos</span>
            </li>
          </ul>
        </experience>

        <experience
          title="Systems Engineering Degree"
          when="Feb 2014 - Ene 2018 (2 years) | Mexico City"
          company="La Salle University"
        >
          <p>I studied Systems Engineering at La Salle University one of the most recognized private University in Mexico where I got my degree by a meritorious average and where I achieve one of the highest grades of my generation.</p>
        </experience>
      </div>
      <div class="md:w-2/5 px-4">
        <block-header icon="hammer-wrench">
          Skills & Knowledge
        </block-header>

        <div>
          <h4 class="font-sans mt-1 uppercase text-gray-dark">
            <span class="icon-medal-first text-3xl text-grey-dark absolute" />
            <span class="pl-8">Im an expert in:</span>
          </h4>
          <p class="pl-8 text-sm text-grey-dark mb-3">
            I have extensive knowledge of technology, a portfolio and experienced enough to consider myself an expert.
          </p>

          <div class="pl-8">
            <h4 class="font-sans text-grey-dark uppercase text-sm">
              Frameworks & Tools
            </h4>

            <ul class="list-reset mb-5">
              <skill :progress="99">
                Laravel
              </skill>
              <skill :progress="99">
                VueJs
              </skill>
              <skill :progress="99">
                NuxtJS
              </skill>
              <skill :progress="99">
                Vuex
              </skill>
              <skill :progress="99">
                Tailwind
              </skill>
              <skill :progress="99">
                Bootstrap
              </skill>
            </ul>
            <h4 class="font-sans text-grey-dark uppercase text-sm">
              Programmatic Languages
            </h4>
            <ul class="list-reset mb-5">
              <skill :progress="99">
                PHP
              </skill>
              <skill :progress="95">
                SQL
              </skill>
              <skill :progress="95">
                JS
              </skill>
            </ul>

            <h4 class="font-sans text-grey-dark uppercase text-sm">
              Other Techs & Metodologies
            </h4>
            <ul class="list-reset mb-5">
              <skill :progress="99">
                MySQL/PostgreSQL
              </skill>
              <skill :progress="99">
                Redis
              </skill>
              <skill :progress="99">
                TDD
              </skill>
              <skill :progress="99">
                Restful APIs
              </skill>
              <skill :progress="99">
                Mocha & Test
              </skill>
              <skill :progress="99">
                Scrum
              </skill>
              <skill :progress="99">
                CI
              </skill>
              <skill :progress="99">
                Sass/Less/Stylus
              </skill>
              <skill :progress="99">
                Webpack
              </skill>
              <skill :progress="99">
                Linux Servers
              </skill>
            </ul>
          </div>
        </div>

        <div>
          <h4 class="font-sans mt-1 uppercase text-gray-dark">
            <span class="icon-medal-second text-3xl text-grey-dark absolute" />
            <span class="pl-8">I have strong knowledge:</span>
          </h4>
          <p class="pl-8 text-sm text-grey-dark mb-3">
            Most of my portfolio are personal projects or experiments, however I feel prepared to take any type of project with this technology.
          </p>
          <div class="ml-8">
            <h4 class="font-sans text-grey-dark uppercase text-sm">
              Frameworks & Tools
            </h4>

            <ul class="list-reset mb-5">
              <skill :progress="50">
                React
              </skill>
              <skill :progress="50">
                Redux
              </skill>
              <skill :progress="50">
                Gridsome
              </skill>
            </ul>
            <h4 class="font-sans text-grey-dark uppercase text-sm">
              Programmatic Languages
            </h4>
            <ul class="list-reset mb-5">
              <skill :progress="40">
                Ruby
              </skill>
              <skill :progress="40">
                Java
              </skill>
            </ul>

            <h4 class="font-sans text-grey-dark uppercase text-sm">
              Techs & Metodologies
            </h4>
            <ul class="list-reset mb-5">
              <skill :progress="60">
                GraphQL
              </skill>
              <skill :progress="60">
                Docker
              </skill>
              <skill :progress="60">
                Elastic Search
              </skill>
              <skill :progress="60">
                AWS
              </skill>
              <skill :progress="30">
                Apache Cordova
              </skill>
            </ul>
          </div>
        </div>

        <div class="pl-8">
          <h4 class="font-sans mb-4">
            Personal
          </h4>
          <ul class="list-reset mb-5">
            <li class="mt-2">
              <i class="icon-checkmark mr-1" />
              Autodidact
            </li>
            <li class="mt-2">
              <i class="icon-checkmark mr-1" />
              Responsible
            </li>
            <li class="mt-2">
              <i class="icon-checkmark mr-1" />
              Proactive
            </li>
            <li class="mt-2">
              <i class="icon-checkmark mr-1" />
              Honest
            </li>
            <li class="mt-2">
              <i class="icon-checkmark mr-1" />
              Passionate
            </li>
          </ul>
          <h4 class="font-sans text-grey-dark uppercase text-sm">
            Latest Github Activity
          </h4>
          <github-heatmap><span class="py-4 block">Loading...</span></github-heatmap>
        </div>

        <block-header class="" icon="bicycle2">
          Hobbies
        </block-header>
        <ul class="list-reset pl-10">
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

        <ul class="list-reset pl-10">
          <li class="pt-1 whitespace-no-wrap">
            <i class="icon-github mr-1" />
            <a class="text-grey-darkest no-underline hover:underline" rel="noopener" href="https://github.com/alfonsobries" target="_blank">
              /alfonsobries
            </a>
          </li>
          <li class="pt-1 whitespace-no-wrap">
            <i class="icon-earth mr-1" />
            <a class="text-grey-darkest no-underline hover:underline" rel="noopener" href="https://www.vexilo.com" target="_blank">
              vexilo.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from '~/components/BlockHeader'
import Experience from '~/components/Experience'
import Skill from '~/components/Skill'
import GithubHeatmap from '~/components/GithubHeatmap'

export default {
  components: {
    BlockHeader,
    Experience,
    Skill,
    GithubHeatmap
  },
  head: {
    title: 'My Personal Resume'
  }
}
</script>
