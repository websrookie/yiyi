<template>
  <div class="edit-config-block">
    <edit-config-render :list="list" :schema="schema" @callback="callback">
      <div v-if="!edit.currentSelect">
        <el-empty description="请在左侧拖入组建后，点击选中组件">
          <template #image>
            <v-icon icon="dragBlank" class="icon"></v-icon>
          </template>
        </el-empty>
      </div>
    </edit-config-render>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import deepmerge from 'deepmerge';
import { useEditorStore } from '@/stores/edit';
import { type BlockSchemaKeys, blockSchema, type BlockSchema } from '@/config/schema';
import type { BaseBlock } from '@/types/edit';
import { findNodeById } from './nested';

const edit = useEditorStore();
const schema = ref<BlockSchema[BlockSchemaKeys]>();

const list = ref<BaseBlock[]>([]);
const callback = (params: { data: object; id: string }) => {
  const { data, id } = params;
  if (!id) return;
  const blockConfig = edit.blocksConfig || [];
  const newBlockConfig = findNodeById(blockConfig, id, (params: any) => {
    let { array, index, node } = params;
    const overwriteMerge = (_destinationArray: any, sourceArray: any) => sourceArray;
    array[index].formData = deepmerge(node.formData, data, {
      arrayMerge: overwriteMerge,
    });

    if (node.nested && node.code === 'column') {
      const cols = node.formData?.cols?.desktop || [0.5, 0.5];
      const oldCols = node.children || [[], []];
      if (oldCols.length > cols.length) {
        const count = oldCols.length - cols.length;
        array[index].children?.splice(oldCols.length - count, count);
      } else {
        const count = cols.length - oldCols.length;
        const diff = Array.from({ length: count }, () => []);
        array[index].children?.push(...diff);
      }
    }
  });

  edit.setBlocksConfig(newBlockConfig);
};

watch(
  () => edit.currentSelect,
  (value) => {
    const code = value?.code as BlockSchemaKeys;
    const properties = blockSchema[code].properties;
    if (!value || !properties) {
      list.value = [];
      return;
    }
    schema.value = blockSchema[code];

    const { formData, id } = value as any;
    const listResult = Object.fromEntries(
      Object.entries(properties).map((itemChild) => {
        const [key, value] = itemChild;
        return [key, { ...value, id, key, formData: formData?.[key] || {} }];
      }),
    );
    list.value = [...Object.values(listResult)];
  },
  {
    immediate: true,
  },
);
</script>

<style scoped lang="scss">
.edit-config-block {
  width: 100%;
}
</style>
