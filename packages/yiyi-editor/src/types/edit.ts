import type { BlockSchema, BlockSchemaKeys } from '@/config/schema';

export type Viewport = 'mobile' | 'desktop';

export interface BaseBlock {
  /**
   * 区分组件
   */
  id: string;

  /**
   * 组件名
   */
  code: string;

  /**
   * 物料区标题
   */
  name: string;

  /**
   * 物料区图标
   */
  icon: string;

  /**
   * 是否是嵌套组件
   */
  nested?: boolean;

  /**
   * 嵌套子项
   */
  children?: BaseBlock[][];

  /**
   * 配置内容
   */
  formData?: Partial<BlockSchema[BlockSchemaKeys]> | Object;

  /**
   * 父组件code
   */
  parent?: string;
}
