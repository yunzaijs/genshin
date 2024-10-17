const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../米游社-BiyV3ayE.png', import.meta.url).href.replace(reg, '')
};
var icon_miyoushe = createUrl();

export { icon_miyoushe as default };
