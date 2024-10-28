import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from "unplugin-icons/vite";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import IconsResolver from "unplugin-icons/resolver";
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        'pinia',
        {
          // custom
          '@vueuse/core': [
            // named imports
            'useMouse', // import { useMouse } from '@vueuse/core',
            // alias
            ['useFetch', 'useMyFetch']
          ],
          axios: [
            // default imports
            ['default', 'axios']
          ]
        }
      ],
      dirs: [],
      dts: 'src/types/auto-imports.d.ts', // typescript 宣告檔案位置
      vueTemplate: false,
      eslintrc: {
        // 生成給 elsint 看的檔案
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      dirs: ['src/components'], // 指定components位置 預設是'src/components'
      dts: 'src/types/components.d.ts', // .d.ts生成位置
      resolvers: [ElementPlusResolver(),
        IconsResolver({ customCollections: ["base"] })
      ], // 解析規則
      
    }),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
       base: FileSystemIconLoader('./src/assets/icons', svg => svg.replace(/fill="[^"]*"/g, 'fill="currentColor"').replace(/width="([^"]*)"|height="([^"]*)"/g, ''))
      },
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
