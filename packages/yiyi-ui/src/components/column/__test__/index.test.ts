import { expect, describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from 'vue-demi';
import { COMPONENT_PREFIX } from '@/config';
import Component from '..';
import CurrentComponent from '../index.vue';

const componentCode = 'image';
const componentClass = `.${COMPONENT_PREFIX}-${componentCode}`;

describe(`${componentCode} base test`, () => {
  test('test component name', () => {
    const app = createApp({}).use(Component);
    expect(app.component(Component.name || '')).toBeTruthy();
  });

  test('test main class', () => {
    const wrapper = mount(CurrentComponent);
    expect(wrapper.find(componentClass).classes()).toBeTruthy();
    wrapper.unmount();
  });
});

describe(`${componentCode} props test`, () => {
  // test('test src', () => {
  //   const src ='https://via.placeholder.com/200';
  //   const wrapper = mount(CurrentComponent, {
  //     props: {
  //       data: {
  //         src: {
  //           desktop: src,
  //           mobile: src
  //         }
  //       }
  //     }
  //   });
  //   expect(wrapper.find(componentClass + ' .image').attributes('src')).toContain(src);
  // });
});
