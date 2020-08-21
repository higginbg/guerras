// Toggle menu button

import { drpdwn, drpdwnBtn, navSmall, menuOpenIcon } from '../variables';

export const menuClose = () => {
  drpdwn.classList.remove(navSmall);
  drpdwnBtn.innerHTML = menuOpenIcon;
};
