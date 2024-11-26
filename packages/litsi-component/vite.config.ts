import { defineConfig } from "vite";
import { fileURLToPath } from 'url'
import { resolve, dirname } from 'path';
// references: https://earthly.dev/blog/yarn-vite-monorepo/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'litsi-component',
      fileName: 'litsi-component'
    }
  }
})
