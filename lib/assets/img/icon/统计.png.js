const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../统计-CZWEuqn5.png', import.meta.url).href.replace(reg, '')
};
var icon_statistics = createUrl();

export { icon_statistics as default };
