<template>
  <div class="edit-config" ref="target" :class="{ 'is-show': edit.configPanelShow }">
    <div class="icon-group">
      <v-icon-tooltip
        icon="expand"
        :content="edit.configPanelShow ? '收起侧边栏' : '展开侧边栏'"
        @click="handlePanelSwitch"
      />
    </div>
    <transition-group name="fade">
      <div class="title" v-if="edit.currentSelect?.id">组件</div>
      <div class="title" v-else>页面</div>
      <edit-config-block v-if="edit.currentSelect?.id" />
      <edit-config-page v-else />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useEditorStore } from '@/stores/edit';
const edit = useEditorStore();

const handlePanelSwitch = () => {
  edit.setConfigPanelShow(!edit.configPanelShow);
};

watch(
  () => edit.currentSelect,
  (value) => {
    if (value?.id) edit.setConfigPanelShow(true);
  },
);

watch(
  () => edit.configPanelShow,
  (value) => {
    if (!value) edit.setCurrentSelect(null);
  },
);
</script>

<style lang="scss" scoped>
.edit-config {
  position: fixed;
  z-index: 200;
  top: var(--edit-header-height);
  right: -280px;
  width: 280px;
  background: white;
  border-left: 1px solid var(--color-border);
  transition: right 0.5s cubic-bezier(1, 0, 0.61, 1.01);
  height: calc(100vh - var(--edit-header-height));

  &.is-show {
    right: 0;
    transition: right 0.5s cubic-bezier(1, 0, 0.61, 1.01);
  }

  .icon-group {
    position: absolute;
    left: -48px;
    top: 16px;
    .icon {
      cursor: pointer;
      width: 32px;
      height: 32px;
      padding: 3px;
      border-radius: var(--border-radius);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      transition: all 0.2s linear;
      border: 1px solid var(--color-border);
      background: white;
      & + .icon {
        margin-top: 10px;
      }
      &:hover {
        background: var(--color-icon-hover);
        transition: all 0.2s linear;
      }
    }
  }

  // .content {
  //   overflow-y: auto;
  //   width: 100%;
  //   height: 100%;

  .title {
    padding: 14px;
    font-size: 20px;
    font-weight: 600;
  }

  :deep(.el-tabs--border-card) {
    border: 0;
  }
  :deep(.el-tabs__content) {
    padding: 0;
  }
  // }
}
</style>
