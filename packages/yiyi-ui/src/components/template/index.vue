<template>
  <div :class="classes"></div>
</template>

<script lang="ts" name="YiyiImage">
import { createNameSpace } from '@/utils/components';
import { defineComponent, computed, toRefs } from 'vue-demi';
import { props } from './props';

const { name, n } = createNameSpace('column');

export default defineComponent({
  name,
  props,
  setup(props) {
    const { data, viewport } = toRefs(props);
    const classes = computed(() => [n()]);
    const src = computed(() => data.value?.src?.[viewport.value] || '');
    return {
      classes,
      src,
    };
  },
});
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
