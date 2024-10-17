const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../树脂-cneryQ22.png', import.meta.url).href.replace(reg, '')
};
var icon_resin = createUrl();

export { icon_resin as default };
