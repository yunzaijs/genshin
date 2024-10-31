import _ from 'lodash'
import { ConfigController as cfg } from 'yunzaijs'
import { Character } from '@src/miao.js'

export default class base {
  e
  userId
  constructor(
    e: {
      user_id?: string
    } = {}
  ) {
    this.e = e
    this.userId = e?.user_id
  }

  model = 'genshin'

  _path = process.cwd().replace(/\\/g, '/')

  get prefix() {
    return `Yz:genshin:${this.model}:`
  }

  // 统一封装渲染
  async renderImg(tpl, data, cfg = {}) {
    //
    return this.e.runtime.render('genshin', `html/${tpl}`, data, {
      ...cfg,
      e: this.e
    })
  }

  /**
   * 截图默认数据
   * @param saveId html保存id
   * @param tplFile 模板html路径
   * @param pluResPath 插件资源路径
   */
  get screenData() {
    const layoutPath = process.cwd() + '/plugins/genshin/resources/html/layout/'
    let yunzaiName = cfg.package.name
    if (yunzaiName == 'miao-yunzai') {
      yunzaiName = 'Miao-Yunzai'
    } else if (yunzaiName == 'yunzaijs') {
      yunzaiName = 'Yunzai-Bot'
    } else if (yunzaiName == 'trss-yunzai') {
      yunzaiName = 'TRSS-Yunzai'
    } else {
      yunzaiName = _.capitalize(yunzaiName)
    }
    let data = {
      saveId: this.userId,
      cwd: this._path,
      yzVersion: `v${cfg?.package?.version ?? 'v'}`,
      yzName: yunzaiName,
      genshinLayout: layoutPath + 'genshin.html',
      defaultLayout: layoutPath + 'default.html'
    }
    if (this.e?.isSr) {
      let char = Character.get('黑天鹅', 'sr')
      return {
        ...data,
        tplFile: `./plugins/genshin/resources/StarRail/html/${this.model}/${this.model}.html`,
        /** 绝对路径 */
        pluResPath: `${this._path}/plugins/genshin/resources/StarRail/`,
        srtempFile: 'StarRail/',
        headImg: char?.imgs?.banner,
        game: 'sr'
      }
    }
    let char = Character.get('闲云', 'gs')
    return {
      ...data,
      tplFile: `./plugins/genshin/resources/html/${this.model}/${this.model}.html`,
      /** 绝对路径 */
      pluResPath: `${this._path}/plugins/genshin/resources/`,
      headImg: char?.imgs?.banner,
      srtempFile: '',
      game: 'gs'
    }
  }
}
