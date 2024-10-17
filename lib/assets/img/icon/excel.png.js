const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../excel-aT7Rgzic.png', import.meta.url).href.replace(reg, '')
};
var icon_excel = createUrl();

export { icon_excel as default };
