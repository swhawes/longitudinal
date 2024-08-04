<template>
  <div class="test-component">
    <h2>Test Component</h2>
    <p>This is a test component.</p>
    <img src="/images/r-for-data-science-cover.jpg" alt="Test Image" />
  </div>
</template>

<script>
export default {
  name: "TestComponent",
};
</script>

<style scoped>
.test-component {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
}
.test-component img {
  width: 100px;
  height: auto;
  margin-top: 10px;
}
</style>
