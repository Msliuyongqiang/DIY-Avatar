import vue from '@vitejs/plugin-vue'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/DIY-Avatar/', // ✅ 关键：设置项目 URL 子目录
  plugins: [
    vue(),
    ...(mode === 'prerelease'
      ? [
          visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            template: 'sunburst',
          }),
        ]
      : []),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  define: {
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
}))
