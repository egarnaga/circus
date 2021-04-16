import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';

import {openMenu} from './modules/openMenu';
import {sliderVertical} from './modules/sliderVertical';
import {sliderHorizontal} from './modules/sliderHorizontal';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
openMenu();
sliderVertical();
sliderHorizontal();
