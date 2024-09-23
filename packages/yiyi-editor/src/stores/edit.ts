import { defineStore } from 'pinia';
import type { BaseBlock, Viewport } from '@/types/edit';

export const useEditorStore = defineStore('edit', {
  state: () => ({
    viewport: 'desktop' as Viewport,
    currentSelect: null as BaseBlock | null,
  }),
  getters: {},
  actions: {
    setCurrentSelect(value: BaseBlock | null) {
      this.currentSelect = value;
    },
    setViewport(value: Viewport) {
      this.viewport = value;
    },
  },
});
