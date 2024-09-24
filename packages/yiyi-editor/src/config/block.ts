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
import { COMPONENT_PREFIX } from '@yiyi/ui';

export const baseBlocks: BaseBlock[] = [
  {
    id: '',
    name: '图片',
    code: `${COMPONENT_PREFIX}-image`,
    icon: 'image',
    formData: {},
  },
  {
    id: '',
    name: '视频',
    code: `${COMPONENT_PREFIX}-video`,
    icon: 'video',
    formData: {},
  },
  {
    id: '',
    name: '文本',
    code: `${COMPONENT_PREFIX}-text`,
    icon: 'text',
    formData: {},
  },
  {
    id: '',
    name: '幻灯片',
    code: `${COMPONENT_PREFIX}-swiper`,
    icon: 'swiper',
    formData: {},
  },
  {
    id: '',
    name: '留白',
    code: `${COMPONENT_PREFIX}-blank`,
    icon: 'blank',
    formData: {},
  },
];

export const seniorBlocks: BaseBlock[] = [
  {
    id: '',
    name: '多行',
    code: `${COMPONENT_PREFIX}-row`,
    icon: 'row',
    nested: true,
    children: [[]],
    formData: {},
  },
  {
    id: '',
    name: '多列',
    code: `${COMPONENT_PREFIX}-column`,
    icon: 'column',
    nested: true,
    children: [[], []],
    formData: {},
  },
  {
    id: '',
    name: '画布',
    code: `${COMPONENT_PREFIX}-canvas`,
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
    code: `${COMPONENT_PREFIX}-image`,
    icon: 'image',
    formData: {},
    parent: 'canvas',
  },
  {
    id: '',
    name: '文本',
    code: `${COMPONENT_PREFIX}-text`,
    icon: 'text',
    formData: {},
    parent: 'canvas',
  },
];
