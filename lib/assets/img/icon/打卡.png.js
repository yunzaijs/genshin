const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../打卡-Cif-Qb30.png', import.meta.url).href.replace(reg, '')
};
var icon_checkin = createUrl();

export { icon_checkin as default };
