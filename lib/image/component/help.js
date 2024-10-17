import React from 'react';
import { BOT_NAME, ConfigController } from 'yunzaijs';
import { LinkStyleSheet } from 'jsxp';
import css_output from '../../assets/css/help.css.js';
import icons from './icons.js';

function Help({ data }) {
    return (React.createElement("html", null,
        React.createElement("head", null,
            React.createElement(LinkStyleSheet, { src: css_output })),
        React.createElement("body", null,
            React.createElement("div", { className: "container", id: "container" },
                React.createElement("div", { className: "head_box" },
                    React.createElement("div", { className: "id_text" },
                        BOT_NAME,
                        " Genshin"),
                    React.createElement("h2", { className: "day_text" },
                        "\u4F7F\u7528\u8BF4\u660E V",
                        ConfigController?.package?.version ?? '4'),
                    React.createElement("img", { className: "genshin_logo", src: icons.genshen })),
                data.map((val, index) => (React.createElement("div", { key: index, className: "data_box" },
                    React.createElement("div", { className: "tab_lable" }, val.group),
                    React.createElement("div", { className: "list" }, val.list.map((item, index) => (React.createElement("div", { className: "item", key: index },
                        React.createElement("img", { className: "item-img", src: icons[item.icon] }),
                        React.createElement("div", { className: "title" },
                            React.createElement("div", { className: "text" }, item.title),
                            React.createElement("div", { className: "dec" }, item.desc))))))))),
                React.createElement("div", { className: "logo" },
                    "Created By ",
                    BOT_NAME)))));
}

export { Help as default };
