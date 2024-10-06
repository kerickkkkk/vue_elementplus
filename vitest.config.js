import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'
import AutoImport from 'unplugin-auto-import/vite'

export default mergeConfig(
  viteConfig,
  defineConfig([
    {
      plugins: [
        AutoImport({
          /* options */
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
            'vue-router'
          ]
        })
      ]
    },
    {
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url))
      }
    }
  ])
)
