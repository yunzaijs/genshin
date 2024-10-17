const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../星辉-D8W-mI1o.png', import.meta.url).href.replace(reg, '')
};
var icon_starshine = createUrl();

export { icon_starshine as default };
