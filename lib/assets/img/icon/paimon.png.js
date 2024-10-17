const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../paimon-OA-vsSmb.png', import.meta.url).href.replace(reg, '')
};
var icon_paimon = createUrl();

export { icon_paimon as default };
