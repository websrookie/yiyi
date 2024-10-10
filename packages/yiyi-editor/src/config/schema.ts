import { schema } from '@yiyi/ui';
import _pageSchema, { type PageSchema } from './page-schema';

export type BlockSchema = typeof schema;

export type BlockSchemaKeys = keyof BlockSchema;

export const blockSchema = schema;

export type PageSchemaFormData = PageSchema;

export const pageSchema = _pageSchema;
