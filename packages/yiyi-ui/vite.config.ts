/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import { isVue2, isVue3 } from 'vue-demi';

const outDirName = isVue2 ? 'vue2' : 'vue3';

export default defineConfig({
  plugins: [
    isVue2 ? createVuePlugin() : vue(),
    isVue3 &&
      dts({
        // 指定 tsconfig 文件
        tsconfigPath: 'tsconfig.app.json',
      }),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
    },
  },
  build: {
    outDir: `dist/${outDirName}`,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'yiyi',
      fileName: 'yiyi',
    },
    rollupOptions: {
      /**
       * 该组件库是直接用于 vue2 或 vue3 环境，宿主会提供对应 vue 环境
       * 将 vue 和 vue-demi 排除可以缩小库体积
       * 并且可以防止和宿主环境 vue 版本冲突
       * 避免 CSS 应用失败
       */
      external: ['vue', 'vue-demi'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      // 配置 mixin.scss 聚合文件全局引入
      scss: {
        additionalData: `@import "@/assets/styles/resources.scss";`,
      },
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      include: ['src/components/**/*'],
      exclude: ['src/**/schema.ts'],
    }
  }
});
