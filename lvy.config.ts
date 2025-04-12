import { defineConfig } from 'lvyjs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const startJSXP = () =>
  import('jsxp').then(({ createServer }) => createServer())
export default defineConfig({
  plugins: [
    () => {
      if (process.argv.includes('--view')) {
        return startJSXP
      }
    }
  ],
  alias: {
    entries: [{ find: '@src', replacement: join(__dirname, 'src') }]
  }
})
