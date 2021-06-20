<template>
  <div class="container py-10 mx-auto font-serif">
    <div>
      <div class="items-center md:flex md:-mx-4">
        <div class="md:flex md:w-3/5">
          <div class="px-4 text-center flex-no-shrink">
            <span class="overflow-hidden rounded-full">
              <img
                class="overflow-hidden rounded-full"
                src="photo.png"
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

        <div class="px-4 mt-8 md:mt-0">
          <h2 class="font-sans text-sm uppercase">
            Contact me
          </h2>
          <hr class="border-b">
          <ul class="list-reset">
            <li class="pt-1 whitespace-no-wrap">
              <i class="mr-1 icon-envelop" />
              <a class="no-underline text-grey-darkest hover:underline" href="mailto:alfonso@vexilo.com">
                alfonso@vexilo.com
              </a>
            </li>
            <li class="pt-1 whitespace-no-wrap">
              <i class="mr-1 icon-skype" />
              <a class="no-underline text-grey-darkest hover:underline" href="skype:alfonso.bribiesca">
                alfonso.bribiesca
              </a>
            </li>
            <li class="pt-1 whitespace-no-wrap">
              <i class="mr-1 icon-twitter" />
              <a class="no-underline text-grey-darkest hover:underline" rel="noopener" target="_blank" href="https://twitter.com/alfonsobries">
                @alfonsobries
              </a>
            </li>
            <li class="pt-1 whitespace-no-wrap">
              <i class="mr-1 icon-github" />
              <a class="no-underline text-grey-darkest hover:underline" rel="noopener" target="_blank" href="https://github.com/alfonsobries">
                /alfonsobries
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-8 md:flex md:-mx-4 md:mt-20">
      <div class="px-4 pb-8 md:w-3/5">
        <block-header>
          Experience
        </block-header>

        <experience
          title="Software Developer"
          when="Oct 2021 - Present day (~1 year) | Remote"
          company="Ark"
        >
          <p>I work remotely as a Full Stack Software Developer for <a class="text-grey-darkest" href="https://ark.io/" target="_blank">Ark</a> a blockchain solutions company working on his different open source and propetary software products with technologies like Laravel, Alpine.js and React.</p>
        </experience>

        <experience
          title="Software Developer"
          when="May 2018 - Oct 2021 (~2 years) | Remote"
          company="Surgio"
        >
          <p>I worked remotely as a Full Stack Software Developer for <a class="text-grey-darkest" href="https://www.surgio.com/" target="_blank">Surgio</a> a CRM designed for Hospitals where over time I help to increase the user experience by completely renovate the frontend with all kind of custom Vue components, improve the overall frontend workflow, implement even more features in the backend and work with the team to standardize the full application codebase.</p>
        </experience>

        <experience
          title="Founder & Developer"
          when="Feb 2009 - Present day (11 years) | Mexico City"
          company="Vexilo"
        >
          <p>I created the brand <a href="https://www.vexilo.com/en" class="text-grey-darkest" target="_blank">Vexilo</a> in which name I developed more than 50 successful websites and web applications for all kinds of companies of all sizes in Mexico.</p>
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
            VueTailwind is a library of Vue components with fully configurable theme classes that don't depend on any CSS frameworks but are by default styled with TailwindCSS.
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
            Explore my Github profile for other open source tools and experiments like this <a target="_blank" class="text-grey-darkest" href="https://vue-minesweeper.vercel.app/">minesweeper clone</a> or this <a target="_blank" class="text-grey-darkest" href="https://movjs.vercel.app/">movies search engine</a>.
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
            I'm used to taking all kinds of online courses as my primary source of new knowledge. Some of my favorites include:
          </p>
          <ul class="list-reset">
            <li class="flex mb-1">
              <i class="mr-2 icon-checkmark" />
              <span>PHP, Vue, Laravel, & TDD Courses at <a class="text-grey-darkest" rel="noopener" href="https://laracasts.com/" target="_blank">Laracasts</a></span>
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
              <span>React - The Complete Guide & Understanding TypeScript - 2020 from Maximilian Schwarzmüller</span>
            </li>
          </ul>
        </experience>

        <experience
          title="Systems Engineering Degree"
          when="Feb 2014 - Ene 2018 (2 years) | Mexico City"
          company="La Salle University"
        >
          <p>I studied Systems Engineering at La Salle University, one of the most recognized private universities in Mexico, where I got my degree by a meritorious average and achieved one of the highest grades of my generation.</p>
        </experience>
      </div>
      <div class="px-4 md:w-2/5">
        <block-header icon="hammer-wrench">
          Skills & Knowledge
        </block-header>

        <div>
          <h4 class="mt-1 font-sans uppercase text-gray-dark">
            <span class="absolute text-3xl icon-medal-first text-grey-dark" />
            <span class="pl-8">Im an expert in:</span>
          </h4>
          <p class="pl-8 mb-3 text-sm text-grey-dark">
            I have extensive knowledge of the technology, a portfolio, and enough experience to consider myself an expert and even teach others.
          </p>

          <div class="pl-8">
            <h4 class="font-sans text-sm uppercase text-grey-dark">
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
            <h4 class="font-sans text-sm uppercase text-grey-dark">
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

            <h4 class="font-sans text-sm uppercase text-grey-dark">
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
            <span class="absolute text-3xl icon-medal-second text-grey-dark" />
            <span class="pl-8">I have strong knowledge:</span>
          </h4>
          <p class="pl-8 mb-3 text-sm text-grey-dark">
            Most of my portfolio are personal projects or experiments, however I feel prepared to take any type of project with this technology.
          </p>
          <div class="ml-8">
            <h4 class="font-sans text-sm uppercase text-grey-dark">
              Frameworks & Tools
            </h4>

            <ul class="mb-5 list-reset">
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
                Gridsome
              </skill>
            </ul>

            <h4 class="font-sans text-sm uppercase text-grey-dark">
              Techs & Metodologies
            </h4>
            <ul class="mb-5 list-reset">
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
          <h4 class="font-sans text-sm uppercase text-grey-dark">
            Latest Github Activity
          </h4>
          <github-heatmap><span class="block py-4">Loading...</span></github-heatmap>
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
            <a class="no-underline text-grey-darkest hover:underline" rel="noopener" href="https://github.com/alfonsobries" target="_blank">
              /alfonsobries
            </a>
          </li>
          <li class="pt-1 whitespace-no-wrap">
            <i class="mr-1 icon-earth" />
            <a class="no-underline text-grey-darkest hover:underline" rel="noopener" href="https://www.vexilo.com" target="_blank">
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
