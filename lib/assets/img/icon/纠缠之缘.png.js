const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../纠缠之缘--9rM65-Q.png', import.meta.url).href.replace(reg, '')
};
var icon_fate = createUrl();

export { icon_fate as default };
