<template>
  <component
    :is="tag"
    :class="classes"
    :href="to"
    :to="to"
    :target="target"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { createNameSpace } from '@/utils/components';
import { defineComponent } from 'vue-demi';
import { props } from './props';

const { name, n } = createNameSpace('link');

export default defineComponent({
  name,
  props,
  computed: {
    classes() {
      return [n()];
    },
    isExternalLink() {
      return (this.to as any).value.match(
        /^(http:\/\/|https:\/\/|javascript:.*|tel:.*|mailto:.*)/
      );
    },
    tag() {
      if (!this.to) return 'span';
      return this.isExternalLink ? 'a' : 'router-link';
    },
  },
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
