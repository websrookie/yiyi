import { PropType } from 'vue-demi';
import { ComponentViewport } from '@/types/component';

export type MoColumnPropsData = {
  /**
   * 列数信息
   */
  cols?: {
    desktop: number[];
    mobile: number[];
  };

  background: {
    desktop: string;
    mobile: string;
  };
};

export type MoColumnPropsList = any[][];
export const props = {
  data: {
    type: Object as PropType<MoColumnPropsData>,
    default: () => ({
      cols: {
        desktop: '',
        mobile: '',
      },
      children: {},
    }),
  },
  children: {
    type: Array as PropType<MoColumnPropsList>,
    default: () => [[], []],
  },
  viewport: {
    type: String as PropType<ComponentViewport>,
    default: 'desktop',
    validator(val: string) {
      return ['desktop', 'mobile'].includes(val);
    },
  },
};
