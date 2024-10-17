const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../原神-CYvP54l2.png', import.meta.url).href.replace(reg, '')
};
var img_genshen = createUrl();

export { img_genshen as default };
