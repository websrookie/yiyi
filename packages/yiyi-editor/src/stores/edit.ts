import { defineStore } from 'pinia';
import type { BaseBlock, Viewport } from '@/types/edit';

export const useEditorStore = defineStore('edit', {
  state: () => ({
    /**
     * 当前模式
     */
    viewport: 'desktop' as Viewport,
    /**
     * 当前选择组件
     */
    currentSelect: null as BaseBlock | null,
    /**
     * 配置面板开关
     */
    configPanelShow: false,
    /**
     * 所有的配置信息
     */
    blocksConfig: [] as BaseBlock[],
  }),
  getters: {
    isMobileViewport: (state) => state.viewport === 'mobile',
  },
  actions: {
    setCurrentSelect(value: BaseBlock | null) {
      this.currentSelect = value;
    },
    setViewport(value: Viewport) {
      this.viewport = value;
    },
    setConfigPanelShow(value: boolean) {
      this.configPanelShow = value;
    },
    setBlocksConfig(value: BaseBlock[]) {
      this.blocksConfig = value;
    },
  },
});
