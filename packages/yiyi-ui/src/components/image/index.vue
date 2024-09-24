<template>
  <div :class="classes">
    <yiyi-link v-if="src" :to="link" target="_blank">
      <img v-bind="$attrs" :src="src" class="image" :style="styles" />
    </yiyi-link>
    <div class="yiyi-image" v-else>
      <yiyi-empty description="暂无图片请上传" />
    </div>
  </div>
</template>

<script lang="ts" name="YiyiImage">
import { createNameSpace } from '@/utils/components';
import { defineComponent, computed, toRefs } from 'vue-demi';
import { props } from './props';
import YiyiEmpty from '../empty';
import YiyiLink from '../link';

const { name, n } = createNameSpace('image');

export default defineComponent({
  name,
  props,
  components: {
    YiyiEmpty,
    YiyiLink,
  },
  setup(props) {
    const { data, viewport } = toRefs(props);
    const classes = computed(() => [n()]);
    const display = computed(() =>
      data.value?.display ? [viewport.value] : ''
    );
    const src = computed(() => data.value?.src?.[viewport.value] || '');
    const link = computed(() => data.value?.link?.[viewport.value] || '');
    const width = computed(() => data.value?.width?.[viewport.value] || '');
    const height = computed(() => data.value?.height?.[viewport.value] || '');
    const styles = computed(() => ({
      width: width.value,
      height: height.value,
    }));
    return {
      classes,
      styles,
      src,
      link,
      display,
      width,
      height,
    };
  },
});
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
