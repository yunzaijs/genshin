const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../绑定账号-DL2NyycT.png', import.meta.url).href.replace(reg, '')
};
var icon_bind = createUrl();

export { icon_bind as default };
