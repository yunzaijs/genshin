import { createRequire } from 'module'
const require = createRequire(import.meta.url)
/**
 * ************
 * 依赖于喵喵插件
 * ************
 */
const components = require.resolve('#miao')
const models = require.resolve('#miao.models')
export const { Data } = await import(`file://${components}`)
export const { Character, Weapon, Player } = await import(`file://${models}`)
