<template>
  <div class="edit">
    <edit-header></edit-header>
    <div class="container" :class="classes">
      <edit-block></edit-block>
      <edit-render></edit-render>
      <edit-config></edit-config>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditorStore } from '@/stores/edit';
const edit = useEditorStore();

const classes = computed(() => {
  return { 'mobile-background': edit.isMobileViewport };
});
</script>

<style lang="scss" scoped>
.edit {
  width: 100%;
  overflow-x: hidden;
  user-select: none;
  --edit-header-height: 64px;
  --edit-block-width: 300px;
  transition: right 0.5s cubic-bezier(1, 0, 0.61, 1.01);
  .container {
    display: flex;
    width: 100%;
    min-width: 100%;
    &.mobile-background {
      background: var(--color-bg);
    }
  }
}
</style>
