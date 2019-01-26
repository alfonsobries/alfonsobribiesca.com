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
              <a class="text-grey-darkest no-underline hover:underline" target="_blank" href="https://twitter.com/alfonsobries">
                @alfonsobries
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
          when="May 2018 - Present day (1 year) | Remote"
          company="Surgio"
        >
          <p>I work as a Software Developer for <a target="_blank" class="text-grey-darkest" href="https://surg.io/">Surgio</a> a CRM designed for Hospitals where over time I help to increase the user experience by implementing technologies like Vue for the frontend and work with the team to add even more features and standardize the full application code base.</p>
        </experience>

        <experience
          title="Founder & Developer"
          when="Feb 2009 - Present day (9 years) | Mexico City"
          company="Vexilo"
        >
          <p>I founded <a target="_blank" class="text-grey-darkest" href="https://www.vexilo.com/">Vexilo</a> a software development company where I personally developed more than 50 succesfully websites and web application for all kind of companies of all sizes in Mexico.</p>
        </experience>

        <experience
          title="Software developer"
          when="Aug 2007 - Jan 2009 (2 years) | Mexico City"
          company="Ingenia Agency"
        >
          <p>Worked for Ingenia Agency one of the biggest digital agencies in Mexico City where I developed a lot of successful websites, e-commerce and web applications for some of the important companies in Mexico City, like Brother Mexico, Coca-Cola, Megacable, etc.</p>
        </experience>

        <block-header class="mt-10" icon="graduation-hat">
          Education
        </block-header>

        <experience
          title="Online Courses & Self Learning"
          when="Continual"
          company="Online Courses & Self Learning"
        >
          <p class="mb-2">I am passionate about self-learning and I usually take multiple courses, especially online. Some of my favorites includes:</p>
          <ul class="list-reset">
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>PHP, Vue, Laravel, & TDD Courses at <a class="text-grey-darkest" href="https://laracasts.com/" target="_blank">Laracasts</a></span>
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
              <span>ES6 for Everyone by Wesbos</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Complete Guide to Elasticsearch by Bo Andersen (In progress)</span>
            </li>
            <li class="mb-1 flex">
              <i class="icon-checkmark mr-2" />
              <span>Advanced React & GraphQL by Wesbos (In progress)</span>
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

        <div class="pl-10">
          <h4 class="font-sans">Frameworks & Tools</h4>
          <ul class="list-reset mb-10">
            <skill :progress="99">Laravel</skill>
            <skill :progress="99">VueJs</skill>
            <skill :progress="99">NuxtJS</skill>
            <skill :progress="99">Tailwind</skill>
            <skill :progress="99">Bootstrap</skill>
            <skill :progress="20">React</skill>
          </ul>
          <h4 class="font-sans">Programmatic Languages</h4>
          <ul class="list-reset mb-10">
            <skill :progress="99">PHP</skill>
            <skill :progress="95">SQL</skill>
            <skill :progress="90">JS</skill>
            <skill :progress="20">Ruby</skill>
            <skill :progress="20">Java</skill>
            <skill :progress="20">.NET</skill>
          </ul>

          <h4 class="font-sans">Techs & Metodologies</h4>
          <ul class="list-reset mb-10">
            <skill :progress="90">TDD</skill>
            <skill :progress="90">Restful APIs</skill>
            <skill :progress="70">Scrum</skill>
            <skill :progress="70">CI</skill>
            <skill :progress="90">Sass</skill>
            <skill :progress="90">Webpack</skill>
            <skill :progress="70">AWS</skill>
            <skill :progress="70">Redis</skill>
            <skill :progress="60">Elastic Search</skill>
            <skill :progress="30">Apache Cordova</skill>
          </ul>

          <h4 class="font-sans">Other Techs</h4>
          <ul class="list-reset mb-10">
            <skill :progress="99">MySQL/MariaDB</skill>
            <skill :progress="99">PostgreSQL</skill>
            <skill :progress="70">Redis</skill>
            <skill :progress="80">Sass</skill>
            <skill :progress="80">Webpack</skill>
            <skill :progress="70">AWS</skill>
            <skill :progress="80">Linux Servers</skill>
            <skill :progress="60">Elastic Search</skill>
            <skill :progress="30">Apache Cordova</skill>
          </ul>

          <h4 class="font-sans mb-4">Personal</h4>
          <ul class="list-reset mb-10">
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
              Honest
            </li>
            <li class="mt-2">
              <i class="icon-checkmark mr-1" />
              Passionate
            </li>
          </ul>
        </div>

        <block-header class="mt-10" icon="bicycle2">
          Hobbies
        </block-header>
        <ul class="list-reset pl-10">
          <li class="mt-2">Runner</li>
          <li class="mt-2">Triathlon Enthusiast</li>
          <li class="mt-2">Bookworm</li>
          <li class="mt-2">Entrepreneurship</li>
        </ul>

        <block-header class="mt-10" icon="network">
          More
        </block-header>
        <ul class="list-reset pl-10">
          <li class="pt-1 whitespace-no-wrap">
            <i class="icon-github mr-1" />
            <a class="text-grey-darkest no-underline hover:underline" href="https://github.com/alfonsobries" target="_blank">
              /alfonsobries
            </a>
          </li>
          <li class="pt-1 whitespace-no-wrap">
            <i class="icon-earth mr-1" />
            <a class="text-grey-darkest no-underline hover:underline" href="https://www.vexilo.com" target="_blank">
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
export default {
  components: {
    BlockHeader,
    Experience,
    Skill
  },
  head: {
    title: 'My Personal Resume'
  }
}
</script>
