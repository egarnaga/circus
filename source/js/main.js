import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';

import {openMenu} from './modules/openMenu';
import {sliderVertical} from './modules/sliderVertical';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
openMenu();
sliderVertical();
