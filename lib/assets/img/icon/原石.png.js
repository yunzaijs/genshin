const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../原石-BYIARiD3.png', import.meta.url).href.replace(reg, '')
};
var icon_stardust = createUrl();

export { icon_stardust as default };
