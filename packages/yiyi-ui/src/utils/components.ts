import { Type, type TSchema } from '@sinclair/typebox';
import { App } from 'vue-demi';

/**
 * schema加上视口
 * @param params
 * @returns
 */
export const schemaAllViewport = <T extends TSchema>(params: T) =>
  Type.Object({
    desktop: params,
    mobile: params,
  });

/**
 * 组件安装，组件加上install函数
 * @param component
 * @returns
 */
export function withInstall(component: any) {
  component.install = function (app: App) {
    const { name } = component;
    if (name) app.component(name, component);
  };
  return component;
}

/**
 * 创建组件名称和和公共命名空间
 * @param prefix 公共命名前缀
 * @returns
 */
export function createNameSpaceFn(prefix = 'yiyi') {
  return (name: string) => {
    const componentName = `${prefix}-${name}`;
    const createBem = (suffix = '') => {
      if (!suffix) return componentName;
      return suffix.startsWith('--')
        ? `${componentName}${suffix}`
        : `${componentName}__${suffix}`;
    };
    return {
      name: componentName,
      n: createBem,
    };
  };
}

export const createNameSpace = createNameSpaceFn();
