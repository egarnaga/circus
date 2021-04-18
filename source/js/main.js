import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';

import {smoothScroll} from './modules/smoothScroll';
import {openMenu} from './modules/openMenu';
import {sliderVertical} from './modules/sliderVertical';
import {sliderHorizontal} from './modules/sliderHorizontal';


// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();

smoothScroll();
openMenu();
sliderVertical();
sliderHorizontal();

