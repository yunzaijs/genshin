const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../role-BbTPmFQ4.png', import.meta.url).href.replace(reg, '')
};
var icon_role = createUrl();

export { icon_role as default };
