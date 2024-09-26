import { customAlphabet } from 'nanoid';
import { markRaw, type Component, defineAsyncComponent } from 'vue';

/**
 * 随机id生成
 * @param length 长度
 * @returns
 */
export const nanoid = (length = 8) => {
  const nanoid = customAlphabet('123456789abcdefghijklmnopqrstuvwxyz', length);
  return nanoid();
};

/**
 * 延迟函数
 * @param delay 延迟时间
 * @returns
 */
export const sleep = (delay: number) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const batchDynamicComponent = (name: string, importUrl: Record<string, Component>) => {
  const components = importUrl;
  const componentMap = Object.assign(
    {},
    ...Object.keys(components).map((item) => {
      const name = item?.split('/')?.pop()?.replace('.vue', '') || '';
      return {
        [name]: components[item],
      };
    }),
  );
  const importComponent = componentMap[name];
  if (!importComponent) return '';
  return markRaw(defineAsyncComponent(importComponent));
};
