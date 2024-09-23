import { Type, type TSchema } from '@sinclair/typebox';

export const schemaAllViewport = <T extends TSchema>(params: T ) => Type.Object({
  desktop: params,
  mobile: params
});
