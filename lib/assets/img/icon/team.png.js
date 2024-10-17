const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../team-jncIWkkY.png', import.meta.url).href.replace(reg, '')
};
var icon_team = createUrl();

export { icon_team as default };
