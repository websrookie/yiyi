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
import type { BaseBlock } from '@/types/edit';

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
