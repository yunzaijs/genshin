const createUrl = () => {
        const platform = ['linux', 'android', 'darwin'];
        const T = platform.includes(process.platform);
        const reg = T ?  /^file:\/\// : /^file:\/\/\//;
        return new URL('../help.css-DDoH_Res.css', import.meta.url).href.replace(reg, '') 
      };
      var css_output = createUrl();

export { css_output as default };
