// 使用 typebox 生成 schema

import { Type, type Static } from '@sinclair/typebox';
import { schemaAllViewport } from '@/utils/components';

const cols = Type.Array(
  Type.Number({
    title: '列数',
    code: 'config-column',
    default: 0.5,
    minItems: 2,
    maxItems: 4,
  })
);

const background = Type.String({
  title: '背景',
  code: 'config-color',
  default: '#FFFFFF',
});

const schema = Type.Object({
  src: schemaAllViewport(cols),
  background: schemaAllViewport(background),
});

export type YiyiColumnSchema = Static<typeof schema>;

export default schema;
