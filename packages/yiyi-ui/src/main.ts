import './style.css';

import YiyiImage from './components/yiyi-image.vue';
import imageSchema from '@/components/image/schema';

export { schemaAllViewport } from '@/utils/components';

export const schema = {
  image: imageSchema
};

export default { YiyiImage };
