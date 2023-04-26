// START //

import { createLayout } from './layout';
import { createAbout } from './about';
import { createMenu } from './produce';

const YELLOW = 'rgb(222, 208, 15)';
const fontWeightNavLink = 700;
const rotateNavLink = 'rotate(15deg';

const content = document.querySelector('#content');

// Populate page with basic skeleton layout on page load
let layout = createLayout();

for (let i = 0; i < layout.length; i++) {
  content.appendChild(layout[i]);
}

const mainContent = document.querySelector('.main-content');

showAbout();

// Insert content in the "about" section
function showAbout() {
  mainContent.appendChild(createAbout());
  const aboutLink = document.querySelector('#about');
  aboutLink.style.color = YELLOW;
  aboutLink.style.fontWeight = fontWeightNavLink;
  aboutLink.style.transform = rotateNavLink;
}

// Insert content in the "menu" section
function showMenu() {
  mainContent.appendChild(createMenu());
}
