import React from 'react';
import { render } from 'jsxp';
import Help from './component/help.js';

/**
 *
 * @param Props
 * @returns
 */
const screenshotRender = (Props) => {
    return render({
        path: 'help',
        name: `help.html`,
        component: React.createElement(Help, { ...Props })
    });
};

export { screenshotRender };
