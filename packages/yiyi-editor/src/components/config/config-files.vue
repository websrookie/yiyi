<template>
  <div class="config-files">
    <el-form-item :label="title" :prop="key + '.' + viewport">
      <img v-if="src" :src="src" @click="handleFileClick" />
      <div v-else class="file" @click="handleFileClick">
        <v-icon icon="upload" class="icon"></v-icon>
      </div>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { ref, toRefs, watch } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
  viewport: {
    type: String,
    default: 'desktop',
  },
});

const handleFileClick = () => {};

const emit = defineEmits(['callback', 'update']);

const { data } = toRefs(props);
const { formData, key, id } = data.value;
const { title, default: defaultValue } = data.value.properties[props.viewport];
const src = ref('');

watch(
  () => formData,
  (value) => {
    src.value = value?.[props.viewport] || defaultValue;
  },
  {
    immediate: true,
  },
);

watch(
  src,
  (value) => {
    let data = {};
    const _value = value || '';
    if (Object.values(formData || {}).length < 2) data = { desktop: _value, mobile: _value };
    else data = { [props.viewport]: _value };

    emit('callback', {
      data: {
        [key]: data,
      },
      id,
    });
    emit('update', {
      [key]: data,
    });
  },
  {
    immediate: true,
  },
);
</script>

<style lang="scss" scoped>
.config-files {
  .file,
  .image {
    width: 80px;
    height: 80px;
    box-shadow: 0 0 0 1px var(--color-border) inset;
    border-radius: var(--border-radius);
    background: var(--color-config-block-bg);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .is-error {
    .file,
    .image {
      box-shadow: 0 0 0 1px var(--el-color-danger) inset;
    }
    :deep(.el-upload--picture-card) {
      border: 1px dashed var(--el-color-danger);
    }
  }
  .image {
    border: 0;
    width: 82px;
    height: 82px;
    object-fit: cover;
  }
  .icon {
    width: 26px;
    height: 26px;
  }
  .is-hidden {
    :deep(.el-upload--picture-card) {
      display: none;
    }
  }
}
</style>
