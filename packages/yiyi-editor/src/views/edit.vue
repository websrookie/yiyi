<template>
  <div class="edit">
    <edit-header></edit-header>
    <div class="container">
      <edit-block></edit-block>
      <edit-render></edit-render>
      <edit-config></edit-config>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.edit {
  width: 100%;
  overflow-x: hidden;
  user-select: none;
  --edit-header-height: 64px;
  --edit-block-width: 300px;
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
