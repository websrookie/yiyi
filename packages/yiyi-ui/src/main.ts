import { App } from 'vue-demi';

import YiyiImage from './components/image';
import YiyiColumn from './components/column';

import imageSchema from '@/components/image/schema';
import columnSchema from '@/components/column/schema';

import '@/assets/styles/index.scss';

export { schemaAllViewport } from '@/utils/components';
export { COMPONENT_PREFIX } from '@/config';

export const schema = {
  image: imageSchema,
  column: columnSchema,
};

const components = [YiyiImage, YiyiColumn];

const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component);
  });
};

export const componentsAllViewport = {
  ...components,
};

export default { install, YiyiImage, YiyiColumn };
