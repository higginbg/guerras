// variables
export const nav = document.getElementById('nav');
export const drpdwn = nav.querySelector('ul');
export const drpdwnBtn = nav.querySelector('button');
export const callBtn = document.getElementById('call');
export const form = document.querySelector('form');
export const requiredInputs = form ? form.querySelectorAll('[required]') : null;

export const menuOpenIcon = '<i class="fas fa-bars"></i>';
export const menuCloseIcon = '<i class="fas fa-times"></i>';
export const navSmall = 'nav-small';
