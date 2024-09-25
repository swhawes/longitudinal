<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Header -->
    <header class="mb-12">
      <h1 class="text-4xl font-bold text-center text-gray-300">About</h1>
    </header>

    <!-- Our Mission -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-200">Our Mission</h2>
      <p class="text-gray-100 leading-relaxed">
        Longitudinal.dev is a collaborative and community-driven hub of resources for longitudinal data science. Whether you’re just starting or seeking to expand
        your expertise, you’ll find tutorials, open-source tools, code examples,
        and documentation that may be useful at different stages of research.
        The platform is fully open source—- feel free to explore and see if you
        find something useful, or if you have something to share or just want to
        get involved, take a look at our
        <a
          href="https://github.com/OpenDevSci/LongDev-ABCD/blob/main/docs/Contributing.md"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-500 hover:underline"
        >
          contribution guide </a
        >.

        

      </p>
    </section>

    <!-- What We Offer -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-200">What We Offer</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Tutorials -->
        <div>
          <h3 class="text-xl font-medium mb-2 text-gray-300">Tutorials</h3>
          <p class="text-gray-100">
            Our step-by-step guides walk through complex methodologies, making
            advanced longitudinal analysis accessible. From foundational
            concepts to specialized techniques, our tutorials are crafted to
            enhance your analytical skills.
          </p>
        </div>
        <!-- Open-Source Tools -->
        <div>
          <h3 class="text-xl font-medium mb-2 text-gray-300">
            Open-Source Tools
          </h3>
          <p class="text-gray-100">
            Explore a curated collection of open-source software and packages
            that streamline your data analysis process and increase your effectiveness in handling longitudinal data.
          </p>
        </div>
        <!-- Code Examples -->
        <div>
          <h3 class="text-xl font-medium mb-2 text-gray-300">Code Examples</h3>
          <p class="text-gray-100">
            Practical code snippets and comprehensive examples in various
            programming languages illustrate key concepts, enabling you to apply
            theory to practice.
          </p>
        </div>
        <!-- Documentation -->
        <div>
          <h3 class="text-xl font-medium mb-2 text-gray-300">Documentation</h3>
          <p class="text-gray-100">
            Access detailed documentation on methodologies, statistical models, and best
            practices. Our documentation serves as a reliable reference to
            support your analytical endeavors.
          </p>
        </div>
      </div>
    </section>

    <!-- Community-Driven Collaboration -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-200">
        Community-Driven Collaboration
      </h2>
      <p class="text-gray-100 leading-relaxed mb-4">
        Longitudinal.dev is built on the collective expertise and contributions
        of its community. We believe that shared knowledge fosters innovation
        and accelerates progress. Everyone is welcome to utilize our resources
        for personal learning or research, and we encourage you to contribute by
        sharing your own tools, tutorials, or insights. Your participation
        enriches our community and supports fellow researchers in their
        endeavors.
      </p>
      <div class="flex space-x-4">
        <a
          href="https://github.com/OpenDevSci/LongDev-ABCD/blob/main/docs/Contributing.md"
          target="_blank"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >Contribute</a
        >

        <a
          href="https://longitudinaldev.slack.com"
          target="_blank"
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition"
          >Connect</a
        >
        <a
          href="#"
          class="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-500 transition"
          >Collaborate</a
        >
      </div>
    </section>

    <!-- Acknowledgments -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-200">Acknowledgments</h2>
      <p class="text-gray-100 leading-relaxed mb-4">
        We extend our gratitude to all contributors, supporters, and users who
        make Longitudinal.dev a valuable resource for the research community.
        Your dedication and expertise drive our continuous improvement and
        expansion.
      </p>
    </section>

    <!-- Contact Us -->
    <section>
      <h2 class="text-2xl font-semibold mb-4 text-gray-200">Contact Us</h2>
      <p class="text-gray-100 leading-relaxed mb-4">
        Have questions, suggestions, or ideas for improving Longitudinal.dev?
        We'd love to hear from you. Reach out to us at
        <a
          href="mailto:contact@longitudinal.dev"
          class="text-blue-500 hover:underline"
          >support@longitudinal.dev</a
        >
        or connect through our
        <a href="https://longitudinaldev.slack.com" class="text-blue-500 hover:underline">community forums</a>
        and
        <a href="https://discord.com/channels/1288111827649171456/1288111940820013139" class="text-blue-500 hover:underline"
          >social media channels</a
        >.
      </p>
    </section>
  </div>
</template>

<script setup>
// No additional script needed for a static About page
</script>

<style scoped>
/* Optional: Add any additional scoped styles here */
</style>
