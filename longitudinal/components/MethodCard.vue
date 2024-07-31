<template>
  <nuxt-link
    :to="card.link"
    class="MethodCard"
    :style="{ background: card.background }"
  >
    <span class="MethodCard__title">{{ card.title }}</span>
    <button class="MethodCard__cta">
      View more
      <span class="MethodCard__cta__icon" />
    </button>
  </nuxt-link>
</template>

<script>
export default {
  name: "MethodCard",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.MethodCard {
  @apply p-4 rounded-lg shadow-lg flex flex-col justify-between;
  background: #d5a05a; /* Default background */
}

.MethodCard__title {
  @apply text-white font-bold text-lg text-center;
}

.MethodCard__cta {
  @apply mt-4 bg-white text-black py-2 px-4 rounded text-center;
}

.MethodCard__cta__icon::after {
  content: "→";
}
</style>
