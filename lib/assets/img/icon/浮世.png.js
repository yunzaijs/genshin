const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../浮世-BJINyipf.png', import.meta.url).href.replace(reg, '')
};
var icon_wushi = createUrl();

export { icon_wushi as default };
