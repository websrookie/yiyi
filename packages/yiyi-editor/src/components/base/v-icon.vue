<template>
  <yiyi-icon :icon="iconSrc" />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import iconConfig, { type ConfigIcon } from '@/config/icon';

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
});

const iconSrc = computed(() => iconConfig[props.icon as ConfigIcon]);
</script>

<style lang="scss" scoped></style>
