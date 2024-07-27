<template>
  <a
    :href="article.link"
    class="HomePageArticleCard"
    :style="{ background: article.background }"
    target="_blank"
  >
    <span class="HomePageArticleCard__title">{{ article.title }}</span>
    <button class="HomePageArticleCard__cta">
      View more
      <span class="HomePageArticleCard__cta__icon" />
    </button>
  </a>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.HomePageArticleCard {
  @apply p-4 rounded-lg shadow-lg flex flex-col justify-between;
  background: linear-gradient(180deg, #4caf97 0%, #51c6ab 100%);
}

.HomePageArticleCard__title {
  @apply text-white font-bold text-lg;
}

.HomePageArticleCard__cta {
  @apply mt-4 bg-white text-black py-2 px-4 rounded;
}

.HomePageArticleCard__cta__icon::after {
  content: "→";
}
</style>
