import React from 'react'
import { BOT_NAME, ConfigController } from 'yunzaijs'
import { LinkStyleSheet } from 'jsxp'
import css_output from '@src/assets/css/help.css'
import icons from './icons'
export default function Help({ data }) {
  return (
    <html>
      <head>
        <LinkStyleSheet src={css_output} />
      </head>
      <body>
        <div className="container" id="container">
          <div className="head_box">
            <div className="id_text">{BOT_NAME} Genshin</div>
            <h2 className="day_text">
              使用说明 V{ConfigController?.package?.version ?? '4'}
            </h2>
            <img className="genshin_logo" src={icons.genshen} />
          </div>
          {data.map((val, index) => (
            <div key={index} className="data_box">
              <div className="tab_lable">{val.group}</div>
              <div className="list">
                {val.list.map((item, index) => (
                  <div className="item" key={index}>
                    <img className="item-img" src={icons[item.icon]} />
                    <div className="title">
                      <div className="text">{item.title}</div>
                      <div className="dec">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="logo">Created By {BOT_NAME}</div>
        </div>
      </body>
    </html>
  )
}
