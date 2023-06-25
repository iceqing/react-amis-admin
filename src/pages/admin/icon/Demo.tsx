import * as React from 'react';

import demoSvg from './1.svg';
import {Icon, registerIcon} from 'amis-ui';

console.log("hello demoSvg");
registerIcon("custom-icon-1", demoSvg);
export default Icon;

