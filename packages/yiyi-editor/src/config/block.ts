// 配置物料
/**
 * 配置数据格式
 * {
 *   id 随机生成 用来区分
 *   icon 组件图标
 *   title | name 组件名称
 *   code | component 组件代码
 *   nested 是否嵌套
 *   children 子组件
 *   formData 配置信息
 * }
 */
import icon from './icon';
import type { BlockSchema, BlockSchemaKeys } from './schema';

const { row, column, image, video, text, swiper, blank, canvas } = icon;

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
  formData?: BlockSchema[BlockSchemaKeys] | Object;

  /**
   * 父组件code
   */
  parent?: string;
}

export const baseBlocks: BaseBlock[] = [
  {
    id: '',
    name: '图片',
    code: 'image',
    icon: 'image',
    formData: {},
  },
  {
    id: '',
    name: '视频',
    code: 'video',
    icon: 'video',
    formData: {},
  },
  {
    id: '',
    name: '文本',
    code: 'text',
    icon: 'text',
    formData: {},
  },
  {
    id: '',
    name: '幻灯片',
    code: 'swiper',
    icon: 'swiper',
    formData: {},
  },
  {
    id: '',
    name: '留白',
    code: 'blank',
    icon: 'blank',
    formData: {},
  },
];

export const seniorBlocks: BaseBlock[] = [
  {
    id: '',
    name: '多行',
    code: 'row',
    icon: 'row',
    nested: true,
    children: [[]],
    formData: {},
  },
  {
    id: '',
    name: '多列',
    code: 'column',
    icon: 'column',
    nested: true,
    children: [[], []],
    formData: {},
  },
  {
    id: '',
    name: '画布',
    code: 'canvas',
    icon: 'canvas',
    nested: true,
    children: [[]],
    formData: {},
  },
];

export const canvasBlocks: BaseBlock[] = [
  {
    id: '',
    name: '图片',
    code: 'image',
    icon: 'image',
    formData: {},
    parent: 'canvas',
  },
  {
    id: '',
    name: '文本',
    code: 'text',
    icon: 'text',
    formData: {},
    parent: 'canvas',
  },
];
