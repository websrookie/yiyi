<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ src: string }>();

const value = ref(111);
console.log(value);
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
