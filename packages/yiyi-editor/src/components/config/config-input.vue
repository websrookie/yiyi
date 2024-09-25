<template>
  <div class="config-input">
    <el-form-item :label="label">
      <el-input v-model="input" :placeholder="placeholder" class="input"></el-input>
    </el-form-item>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const input = ref('');
</script>

<style scoped lang="scss">
.config-input {
  :deep(.el-input__wrapper) {
    background: var(--color-config-block-bg);
  }
}
</style>
