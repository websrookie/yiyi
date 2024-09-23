import { Type, type TSchema } from '@sinclair/typebox';
import { Plugin, Component, App } from 'vue-demi';

export const schemaAllViewport = <T extends TSchema>(params: T ) => Type.Object({
  desktop: params,
  mobile: params
});

export function withInstall(component: Component ) {
  (component as Component & Plugin).install = function (app: App) {
    const { name } = component;
    if (name) app.component(name, component);
  }
}
