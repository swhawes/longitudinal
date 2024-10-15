<template>
  <a
    :href="card.link"
    class="method-card group"
    :style="{ '--primary-color': card.background }"
  >
    <div class="card-content relative isolate">
      <div class="card-top">
        <h3>{{ card.title }}</h3>
      </div>
      <div class="card-bottom">
        <p class="view-more-button">View more →</p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
interface MethodCard {
  title: string;
  link: string;
  background: string;
}

const props = defineProps<{ card: MethodCard }>();
</script>

<style scoped>
.method-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  overflow: hidden;
  height: 100%;
  background: linear-gradient(180deg, var(--primary-color), black);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 0;
}

/* Border highlight using dynamic color */
.method-card::before {
  content: "";
  position: absolute;
  inset: -2px;
  background: linear-gradient(
    135deg,
    rgba(var(--primary-color-rgb), 0.3),
    rgba(var(--primary-color-rgb), 0.6)
  );
  border-radius: 12px;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Hover effects */
.method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.method-card:hover::before {
  opacity: 1;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.card-top {
  flex: 1;
  padding: 1rem;
  background: transparent;
  align-items: center;
  justify-content: center;
  display: flex;
}

.card-top h3 {
  color: #fff;
  text-align: center;
}

.card-bottom {
  height: 50%;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.view-more-button {
  background: white;
  color: black;
  border: 2px solid #d5a05a;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s, color 0.3s;
}

.view-more-button:hover {
  background: #d5a05a;
  color: white;
}
</style>
