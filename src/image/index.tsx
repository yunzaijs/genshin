import React from 'react'
import { render, ObtainProps } from 'jsxp'
import { Help } from '@src/image/component/index'
/**
 *
 * @param Props
 * @returns
 */
export const screenshotRender = (Props: ObtainProps<typeof Help>) => {
  return render({
    path: 'help',
    name: `help.html`,
    component: <Help {...Props} />
  })
}
