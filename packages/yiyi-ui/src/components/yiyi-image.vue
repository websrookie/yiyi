<script setup lang="ts">
// import { ref } from 'vue';

defineProps<{ src: string }>();
</script>

<template>
  <img :src="src" class="image" />
</template>

<style scoped>
.image {
  width: 300px;
  height: 400px;
  margin: 0 auto;
}
</style>
