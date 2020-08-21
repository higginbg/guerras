// Handle swiping left to close menu
// https://stackoverflow.com/questions/15084675/how-to-implement-swipe-gestures-for-mobile-devices

import menuClose from './MenuClose';

let xDown = null;
let yDown = null;

export const handleTouchStart = e => {
  xDown = e.touches[0].clientX;
  yDown = e.touches[0].clientY;
};

export const handleTouchMove = e => {
  if (!xDown || !yDown) {
    return;
  }
  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;
  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if (Math.abs(xDiff) > Math.abs(yDiff)) { /* most significant */

    if (xDiff > 0) {
      /* left swipe */
      menuClose();
    } else {
      /* right swipe */
    }
  } else {
    if (yDiff > 0) {
      /* up swipe */
    } else {
      /* down swipe */
    }
  }

  /* reset values */
  xDown = null;
  yDown = null;
};
