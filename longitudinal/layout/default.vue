<template>
  <div>
    <header>
      <h1>This is a test of default.vue layout.</h1>
      <nav>
        <!-- Navigation links -->
      </nav>
    </header>
    <main>
      <slot />
      <NuxtPage />
    </main>
    <footer>
      <!-- Footer content -->
    </footer>
  </div>
</template>

<script setup>
// Add any required setup code here
</script>

<style scoped>
/* Add custom styles here */
</style>
