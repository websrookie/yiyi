import { nanoid } from '@/utils';
import { cloneDeep } from 'lodash';

/**
 * column 嵌套 class
 * 用来在 move 里面查看是否可以嵌套
 */
export const nestedClass = 'nested-container';

/**
 * 多个draggable组件的group名
 * 相同名可以相互拖拽
 */
export const dragGroup = 'blocks';

/**
 * draggable移动事件
 * 判断是否可以拖入
 * @returns
 */
export const move = (e: any) => {
  const classList = Array.from(e?.to?.classList);
  const isRelatedNested = classList?.includes(nestedClass);
  if (e?.draggedContext?.element?.nested && isRelatedNested) return false;
  return true;
};

/**
 * draggable克隆事件
 * @param e
 * @returns
 */
export const clone = (e: object) => {
  return cloneDeep({ ...e, id: nanoid(8) });
};
