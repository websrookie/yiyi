<template>
  <div class="edit-config-render">
    <el-form label-width="auto">
      <div v-for="(item, index) in list" :key="index">
        <component
          v-if="getComponent(item)"
          :is="getComponent(item)"
          :data="item"
          :viewport="edit.viewport"
          @callback="callback"
        ></component>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/edit';
import { batchDynamicComponent } from '@/utils';

defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});

const edit = useEditorStore();

const emit = defineEmits(['callback']);
const callback = (data: any) => {
  emit('callback', data);
};

const getComponent = (item: any) => {
  const code = item.properties[edit.viewport].code;
  return batchDynamicComponent(code, import.meta.glob('@/components/config/**/*.vue'));
};
</script>

<style lang="scss" scoped>
.edit-config-render {
  overflow-y: auto;
  width: 100%;

  :deep(.el-form) {
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 14px;
  }
  :deep(.el-form-item__label) {
    justify-content: flex-start;
  }
}
</style>
