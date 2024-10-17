const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../abyss-AQQBUUs3.png', import.meta.url).href.replace(reg, '')
};
var icon_abyss = createUrl();

export { icon_abyss as default };
