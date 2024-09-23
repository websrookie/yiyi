<template>
  <img :src="src" class="image" />
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi';

export default defineComponent({
  props: {
    src: String
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

<style scoped lang="scss" >
.image {
  width: 300px;
  height: 400px;
  margin: 0 auto;
}
</style>
