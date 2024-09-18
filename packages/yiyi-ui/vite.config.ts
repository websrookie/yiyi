import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import { resolve } from 'path';
import { isVue2 } from 'vue-demi';

const outDirName = isVue2 ? 'vue2' : 'vue3';

export default defineConfig({
  plugins: [isVue2 ? createVuePlugin() : vue()],
  build: {
    outDir: `dist/${outDirName}`,
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'yiyi',
      fileName: 'yiyi',
    },
    rollupOptions: {
      external: ['vue', 'vue-demi'],
      output: {
        globals: {
          vue: 'Vue',
          'vue-demi': 'VueDemi',
        },
      },
    },
  },
});
