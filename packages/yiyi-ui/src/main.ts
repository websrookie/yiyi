import '@/assets/styles/index.scss';

import YiyiImage from './components/image';
import imageSchema from '@/components/image/schema';
import { App } from 'vue-demi';

export { schemaAllViewport } from '@/utils/components';

export const schema = {
  image: imageSchema
};

const components = [
  YiyiImage
];

const install = (app: App) => {
  components.forEach((component: any) => {
    app.component(component.name, component);
  })
}

export const componentsAllViewport = {
  ...components
}

export default {install, YiyiImage };
