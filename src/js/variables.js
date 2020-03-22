// variables
const nav            = document.getElementById('nav');
const drpdwn         = nav.querySelector('ul');
const drpdwnBtn      = nav.querySelector('button');
const callBtn        = document.getElementById('call');
const form           = document.querySelector('form');
const requiredInputs = form ? form.querySelectorAll('[required]') : null;

const menuOpenIcon = '<i class="fas fa-bars"></i>';
const menuCloseIcon = '<i class="fas fa-times"></i>';
const navSmall = 'nav-small';

export { nav, drpdwn, drpdwnBtn, callBtn, form, requiredInputs, menuOpenIcon, menuCloseIcon, navSmall };
