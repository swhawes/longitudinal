<template>
  <!-- Hero Section -->
  <section>
    <div class="bg-#020420">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div class="relative overflow-hidden rounded-lg lg:h-96">
          <div class="absolute inset-0">
            <img
              src="/public/images/opensource_logos.png"
              alt=""
              class="h-full w-full object-cover object-center"
            >
          </div>
          <div
            aria-hidden="true"
            class="relative h-96 w-full lg:hidden"
          />
          <div
            aria-hidden="true"
            class="relative h-32 w-full lg:hidden"
          />
          <div
            class="absolute inset-x-0 bottom-0 rounded-bl-lg rounded-br-lg bg-black bg-opacity-75 p-6 backdrop-blur backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-br-none lg:rounded-tl-lg"
          >
            <div>
              <h2 class="text-xl font-bold text-white">
                Open Source Tools
              </h2>
              <p class="mt-1 text-sm text-gray-100">
                Tools to help longitudinal data science research.
              </p>
            </div>
            <a
              href="#"
              class="mt-6 flex flex-shrink-0 items-center justify-center rounded-md border border-white border-opacity-25 bg-white bg-opacity-0 px-4 py-3 text-base font-medium text-white hover:bg-opacity-10 sm:ml-8 sm:mt-0 lg:ml-0 lg:w-full"
            >View tools</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Introduction Section -->
  <section
    id="tools"
    class="bg-white text-gray-800 py-16 relative"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold text-center">
        What are Open Source Tools?
      </h2>
      <p class="mt-6 text-lg leading-8 text-center">
        Open source tools provide the foundation for scalable, reproducible
        research, offering essential functionalities for data management,
        analysis, and visualization.
      </p>

      <!-- Carousel Container with Scroll Buttons -->
      <div class="relative mt-10">
        <!-- Left Arrow -->
        <button
          class="scroll-button left-0"
          @click="scrollLeft"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <!-- Carousel -->
        <div
          ref="carousel"
          class="carousel-container"
        >
          <!-- Tool 1 -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🛠️ Version Control (Git/GitHub)
              </h3>
              <p class="text-lg text-gray-700">
                Manage code and collaborate seamlessly on longitudinal data
                projects.
              </p>
              <a
                href="/tools/version-control"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>

          <!-- Tool 2 -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🗂️ Data Formats (Apache Parquet and Arrow)
              </h3>
              <p class="text-lg text-gray-700">
                Efficient formats designed to handle large-scale datasets with
                high performance.
              </p>
              <a
                href="/tools/data-formats"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>

          <!-- Tool 3 -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🔗 Data Sharing Platforms
              </h3>
              <p class="text-lg text-gray-700">
                Secure and scalable platforms for sharing and accessing research
                data globally.
              </p>
              <a
                href="/tools/data-sharing"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>

          <!-- Additional Tools -->
          <!-- Tool 4: IDEs -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                💻 Integrated Development Environments (IDEs)
              </h3>
              <p class="text-lg text-gray-700">
                Powerful environments for developing and testing data science
                code.
              </p>
              <a
                href="/tools/ides"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>

          <!-- Tool 5: Notebooks -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                📓 Notebooks
              </h3>
              <p class="text-lg text-gray-700">
                Interactive notebooks for literate programming and exploratory
                analysis.
              </p>
              <a
                href="/tools/notebooks"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>

          <!-- Tool 6: Literate Programming -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                📜 Literate Programming
              </h3>
              <p class="text-lg text-gray-700">
                Tools that combine code, documentation, and analysis into a
                single document.
              </p>
              <a
                href="/tools/literate-programming"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>

          <!-- Tool 7: Databases -->
          <div class="feature">
            <div class="feature-content">
              <h3 class="text-2xl font-semibold mb-4">
                🗄️ Databases
              </h3>
              <p class="text-lg text-gray-700">
                Robust and scalable databases for managing large longitudinal
                datasets.
              </p>
              <a
                href="/tools/databases"
                class="learn-more mt-4 inline-block text-blue-600 hover:underline"
              >Learn more →</a>
            </div>
          </div>
        </div>

        <!-- Right Arrow -->
        <button
          class="scroll-button right-0"
          @click="scrollRight"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-8 w-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
  <section class="bg-white">
    test
  </section>
  <section>
    <div class="overflow-hidden">
      <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div
          class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
        >
          <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl"
            >
              Programming Languages
            </h1>
            <p
              class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
            >
              Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
              cupidatat mollit aute velit. Et labore commodo nulla aliqua
              proident mollit ullamco exercitation tempor. Sint aliqua anim
              nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate
              tempor esse minim amet fugiat veniam occaecat aliqua.
            </p>
          </div>
          <div
            class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div
              class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
            >
              <div class="relative">
                <img
                  src="public/images/python-logo.png"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                >
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div
              class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36"
            >
              <div class="relative">
                <img
                  src="public/images/r-logo.png"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                >
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <img
                  src="public/images/julia-logo.svg"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                >
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                >
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                >
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white text-black">
    testz
  </section>
  <section>
    <div class="bg-gray-900 py-24 sm:py-32">
      <div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-gray-600 sm:text-6xl">
          Integrated Develoment Environments (IDEs)
        </h1>
        <p
          class="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none"
        >
          Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
          cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
          mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit
          id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet
          fugiat veniam occaecat aliqua.
        </p>
      </div>
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3"
        >
          <div class="bg-white/5 p-8 sm:p-10">
            <img
              class="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width="158"
              height="48"
            >
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <img
              class="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width="158"
              height="48"
            >
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <img
              class="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width="158"
              height="48"
            >
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <img
              class="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/laravel-logo-white.svg"
              alt="Laravel"
              width="158"
              height="48"
            >
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <img
              class="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            >
          </div>
          <div class="bg-white/5 p-6 sm:p-10">
            <img
              class="max-h-12 w-full object-contain"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width="158"
              height="48"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white text-black">
    test
  </section>
  <section class="bg-white">
    <!-- Newsletter section -->
    <!-- <div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8"> -->
    <div
      class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32"
    >
      <h2
        class="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        Version Control
      </h2>
      <p
        class="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300"
      >
        Reprehenderit ad esse et non officia in nulla. Id proident tempor
        incididunt nostrud nulla et culpa.
      </p>
      <form class="mx-auto mt-10 flex max-w-md gap-x-4">
        <label
          for="email-address"
          class="sr-only"
        >Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required=""
          class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        >
        <button
          type="submit"
          class="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Notify me
        </button>
      </form>
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fill-opacity="0.7"
        />
        <defs>
          <radialGradient
            id="759c1415-0410-454c-8f7c-9a820de03641"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stop-color="#7775D6" />
            <stop
              offset="1"
              stop-color="#E935C1"
              stop-opacity="0"
            />
          </radialGradient>
        </defs>
      </svg>
      <!-- </div> -->
    </div>
  </section>
  <section class="bg-white text-black">
    test
  </section>
</template>

<script setup>
import { defineComponent, h, ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import {
  ArrowPathIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  EllipsisHorizontalIcon,
  MapPinIcon
} from '@heroicons/vue/20/solid'

const meetings = [
  {
    id: 1,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks'
  },
  {
    id: 2,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks'
  },
  {
    id: 3,
    date: 'January 10th, 2022',
    time: '5:00 PM',
    datetime: '2022-01-10T17:00',
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    location: 'Starbucks'
  }
  // More meetings...
]

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' }
]

const tools = [
  {
    icon: '🛠️',
    title: 'Version Control (Git/GitHub)',
    description: 'Manage code and collaborate on longitudinal data projects.',
    link: '/tools/version-control'
  },
  {
    icon: '🗂️',
    title: 'Data Formats (Apache Parquet and Arrow)',
    description: 'Efficient formats for large-scale datasets.',
    link: '/tools/data-formats'
  }
  // Add more tools here...
]

const people = [
  {
    name: 'Leslie Alexander',
    email: 'leslie.alexander@example.com',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Michael Foster',
    email: 'michael.foster@example.com',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Dries Vincent',
    email: 'dries.vincent@example.com',
    role: 'Business Relations',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null
  },
  {
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    role: 'Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: '3h ago',
    lastSeenDateTime: '2023-01-23T13:23Z'
  },
  {
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    role: 'Director of Product',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lastSeen: null
  }
]

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' }
// ]
const primaryFeatures = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ServerIcon
  }
]
const secondaryFeatures = [
  {
    name: 'Push to deploy',
    description:
      'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates',
    description:
      'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon
  },
  {
    name: 'Simple queues',
    description:
      'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon
  }
]
const featuredTestimonial = {
  body: 'Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80',
    logoUrl: 'https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg'
  }
}
const testimonials = [
  [
    [
      {
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ],
    [
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ]
  ],
  [
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ],
    [
      {
        body: 'Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
      }
      // More testimonials...
    ]
  ]
]
const footerNavigation = {
  solutions: [
    { name: 'Marketing', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Commerce', href: '#' },
    { name: 'Insights', href: '#' }
  ],
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' }
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' }
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd'
            })
          ])
      })
    },
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd'
            })
          ])
      })
    },
    {
      name: 'X',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z'
            })
          ])
      })
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd'
            })
          ])
      })
    },
    {
      name: 'YouTube',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd': 'M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z',
              'clip-rule': 'evenodd'
            })
          ])
      })
    }
  ]
}

const mobileMenuOpen = ref(false)
</script>

<style scoped>
.carousel-container {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  scrollbar-width: none; /* Hide scrollbar */
}

.carousel-container::-webkit-scrollbar {
  display: none; /* Hide scrollbar */
}

.feature {
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  min-width: 20rem; /* Fixed width for consistent display */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.4); /* Translucent background */
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}

.scroll-button:hover {
  background-color: rgba(0, 0, 0, 0.6); /* Darker on hover */
}

.left-0 {
  left: 0.5rem;
}

.right-0 {
  right: 0.5rem;
}

.feature-content h3,
.feature-content p {
  white-space: normal;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #555;
}

.learn-more {
  color: #0073e6;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.learn-more:hover {
  color: #005bb5;
}
</style>
