// 使用 typebox 生成 schema

import { Type, type Static } from '@sinclair/typebox';
import { schemaAllViewport } from '@/utils/components';

const display = Type.Boolean({
  title: '屏幕',
  code: 'config-viewport',
  default: true,
});

const src = Type.String({
  title: '图片',
  code: 'config-files',
  default: '',
});

const link = Type.String({
  title: '链接',
  code: 'config-input',
  default: '',
  placeholder: '请输入链接',
});

const width = Type.String({
  title: '宽度',
  code: 'config-input',
  default: '100%',
  placeholder: '请输入宽度',
});

const height = Type.String({
  title: '高度',
  code: 'config-input',
  default: '295px',
  placeholder: '请输入高度',
});

const schema = Type.Object({
  display: schemaAllViewport(display),
  src: schemaAllViewport(src),
  link: schemaAllViewport(link),
  width: schemaAllViewport(width),
  height: schemaAllViewport(height),
});

export type YiyiImageSchema = Static<typeof schema>;

export default schema;
