const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../问号-CS2hHhBV.png', import.meta.url).href.replace(reg, '')
};
var icon_question = createUrl();

export { icon_question as default };
