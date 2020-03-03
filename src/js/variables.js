// variables
const nav            = document.getElementById('nav');
const drpdwn         = nav.querySelector('ul');
const drpdwnBtn      = nav.querySelector('button');
const callBtn        = document.getElementById('call');
const form           = document.querySelector('form');
const requiredInputs = form.querySelectorAll('[required]') || {};
const resume         = form.querySelector('#resume');

const isRoot = location.pathname === '/';

const menuOpenIcon = '<i class="fas fa-bars"></i>';
const menuCloseIcon = '<i class="fas fa-times"></i>';
const navSmall = 'nav-small';

export { nav, drpdwn, drpdwnBtn, callBtn, form, requiredInputs, resume, isRoot, menuOpenIcon, menuCloseIcon, navSmall };
