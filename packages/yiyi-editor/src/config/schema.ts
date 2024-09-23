import { schema } from '@yiyi/ui';

export type BlockSchema = typeof schema;

export type BlockSchemaKeys = keyof BlockSchema;

export const blockSchema = schema;
