import React from 'react'
import { defineConfig } from 'jsxp'
import { createRequire } from 'node:module'
import Help from '@src/image/component/help'
import { readFileSync } from 'fs'
import { parse } from 'yaml'
const require = createRequire(import.meta.url)
const url = require('./defSet/bot/help.yaml')
const d = parse(readFileSync(url, 'utf8'))
export default defineConfig({
  routes: {
    '/help': {
      component: <Help data={d} />
    }
  }
})
