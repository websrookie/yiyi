<template>
  <div class="edit-render" :style="pageStyle" :class="pageClass">
    <edit-render-drag :list="list" :group="dragGroup" class="render"></edit-render-drag>
    <el-empty class="empty" v-if="!list?.length" description="请在左侧拖入组件到此处"></el-empty>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import type { BaseBlock } from '@/types/edit';
import { dragGroup } from './nested';
import { useEditorStore } from '@/stores/edit';

const edit = useEditorStore();

const list = ref<BaseBlock[]>([]);

watch(
  () => list.value,
  (value) => {
    edit.setBlocksConfig(value);
  },
  {
    deep: true,
  },
);

watch(
  () => edit.blocksConfig,
  (value) => {
    list.value = value;
  },
  {
    deep: true,
  },
);

const pageStyle = computed(() => {
  return {};
});

const pageClass = computed(() => {
  return { 'is-mobile': edit.isMobileViewport };
});
</script>

<style scoped lang="scss">
.edit-render {
  container-type: inline-size;
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--edit-header-height));
  margin-left: var(--edit-block-width);
  margin-top: var(--edit-header-height);
  background: white;
  &.is-mobile {
    width: 375px;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    margin-top: calc(var(--edit-header-height) + 20px);
    margin-bottom: 20px;
    transform: translateX(10px);
  }
  .empty {
    position: absolute;
    z-index: 0;
    top: 0;
    top: 0;
    width: inherit;
  }
  .render {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
