const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../weapon-Ywsgkypf.png', import.meta.url).href.replace(reg, '')
};
var icon_weapon = createUrl();

export { icon_weapon as default };
