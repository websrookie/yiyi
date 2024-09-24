<template>
  <div :class="classes" :styles="styles">
    <div
      class="item"
      v-for="(item, index) in cols"
      :key="index"
      :style="itemStyle(item)"
    >
      <slot :item="slotItem(index)" :index="index"></slot>
    </div>
  </div>
</template>

<script lang="ts" name="YiyiColumn">
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
    const slotItem = computed(
      () => (index: number) => data.value?.cols?.[viewport.value]?.[index] || []
    );
    const cols = computed(() => data.value?.cols?.[viewport.value] || '');
    const background = computed(
      () => data.value?.background?.[viewport.value] || ''
    );
    const styles = computed(() => ({ background: background.value }));
    const itemStyle = computed(() => (item: number | string) => ({
      width: +item * 100 + '%',
    }));
    return {
      classes,
      cols,
      background,
      styles,
      slotItem,
      itemStyle,
    };
  },
});
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
