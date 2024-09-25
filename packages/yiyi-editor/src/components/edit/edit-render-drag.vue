<template>
  <draggable
    animation="200"
    item-key="id"
    ghost-class="ghost-class"
    class="edit-block-drag"
    :list="list"
    :group="group"
    :sort="sort"
    :clone="clone"
    :move="move"
  >
    <template #item="{ element }">
      <div class="element">
        <div
          v-if="element.nested && level < 2"
          class="block-nested-render"
          :class="activeClass(element)"
          @click.stop="edit.setCurrentSelect(element)"
        >
          <component
            :is="renderComponentCode(element)"
            :key="element.id"
            :data="element.formData"
            :children="element.children"
            :viewport="edit.viewport"
          >
            <template #default="{ item, index }">
              <edit-render-drag
                class="nested-item"
                :key="element.id + '-' + index"
                :class="nestedClass"
                :list="item"
                :level="level + 1"
                :group="group"
              ></edit-render-drag>
            </template>
          </component>
        </div>
        <div
          v-else
          class="block-render"
          :class="activeClass(element)"
          @click.stop="edit.setCurrentSelect(element)"
        >
          <component
            :is="renderComponentCode(element)"
            :data="element.formData"
            :children="element.children"
            :viewport="edit.viewport"
          ></component>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useEditorStore } from '@/stores/edit';
import { move, clone, nestedClass } from './nested';
import { COMPONENT_PREFIX } from '@/config';

defineOptions({
  name: 'EditRenderDrag',
});

const edit = useEditorStore();

defineProps({
  list: {
    type: Array,
    required: true,
    default: () => [],
  },
  group: {
    type: [String, Object],
    default: 'group',
  },
  sort: {
    type: Boolean,
    default: true,
  },
  level: {
    type: Number,
    default: 1,
  },
});

const renderComponentCode = computed(() => {
  return (element: { code: string }) => {
    return `${COMPONENT_PREFIX}-${element.code}`;
  };
});

const activeClass = computed(() => {
  return (element: { id: string }) => {
    const id = edit.currentSelect?.id || '';
    return { 'is-active': element.id === id };
  };
});
</script>

<style scoped lang="scss">
.edit-render-drag {
  .element {
    position: relative;
  }
}
.nested-item {
  border: 1px solid var(--color-edit-render-block-border);
  background: var(--color-edit-render-block-bg);
  height: 100%;
  min-height: inherit;
  & + .nested-item {
    border-left: 0;
  }
}
.block-nested-render,
.block-render {
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
}
.block-nested-render {
  &:hover,
  &.is-active {
    // 注意不能像block-render做成after，否则组件无法拖入嵌套容器里
    border: 1px dashed var(--color-edit-render-block-border-hover);
  }
}
.block-render {
  position: relative;
  &:hover,
  &.is-active {
    // 在表面蒙上一层，加上边框，防止组件可以交互
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px dashed var(--color-edit-render-block-border-hover);
    }
  }
}
</style>
