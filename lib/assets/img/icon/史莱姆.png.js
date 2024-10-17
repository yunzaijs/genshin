const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../史莱姆-Cwcucx_3.png', import.meta.url).href.replace(reg, '')
};
var icon_slime = createUrl();

export { icon_slime as default };
