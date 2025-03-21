import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import copy from 'rollup-plugin-copy'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      plugins: [
        copy({
          targets: [
            { src: 'node_modules/unicode-segmenter/**/*.d.ts', dest: 'types' }
          ]
        })
      ]
    }
  }
})