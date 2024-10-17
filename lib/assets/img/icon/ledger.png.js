const createUrl = () => {
const platform = ['linux', 'android', 'darwin'];
const T = platform.includes(process.platform);
const reg = T ?  /^file:\/\// : /^file:\/\/\//;
return new URL('../../ledger-CcEgaxwd.png', import.meta.url).href.replace(reg, '')
};
var icon_ledger = createUrl();

export { icon_ledger as default };
