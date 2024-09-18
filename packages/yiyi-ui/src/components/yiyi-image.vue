<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    src: String,
  },
  data() {
    return {
      value: 11,
    };
  },
  mounted() {
    console.warn(this.value);
  },
});
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
