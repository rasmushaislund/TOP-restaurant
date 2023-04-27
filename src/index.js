// START //

import './style.css';
import '../img';
import { createLayout } from './layout';
import { createAbout } from './about';
import { createMenu } from './produce';
import { createContact } from './contact';

// Styling for nav links when active
const YELLOW = 'rgb(222, 208, 15)';
const fontWeightNavLink = 700;
const rotateNavLink = 'rotate(15deg';

// Select container div to populate with layout upon load/re-load
const content = document.querySelector('#content');

// Populate page with basic skeleton layout on page load
let layout = createLayout();

for (let i = 0; i < layout.length; i++) {
  content.appendChild(layout[i]);
}

const mainContent = document.querySelector('.main-content');

showAbout();
showMenu();
showContact();

// Select needed DOM elements

const aboutLink = document.querySelector('#about');
const produceLink = document.querySelector('#produce');
const contactLink = document.querySelector('#contact');
const navLinks = document.querySelectorAll('.nav-item');
const aboutContainer = document.querySelector('.about-container');
const menuContainer = document.querySelector('.menu-container');
const contactContainer = document.querySelector('.contact-container');

// Hide main content upon page load
mainContent.style.display = 'none';

// Attach same event to each of the navigation links
navLinks.forEach((link) => {
  link.addEventListener('click', changeNavLinkStyleAndContent);
});

// Change style for nav links when clicked and show appropriate page content
function changeNavLinkStyleAndContent(e) {
  let target = e.target;
  clearNavLinkStyleAndContent();
  if (target.matches('#about')) {
    showAbout();
    aboutLink.style.color = YELLOW;
    aboutLink.style.fontWeight = fontWeightNavLink;
    aboutLink.style.transform = rotateNavLink;
    aboutContainer.style.display = 'flex';
  } else if (target.matches('#produce')) {
    showMenu();
    produceLink.style.color = YELLOW;
    produceLink.style.fontWeight = fontWeightNavLink;
    produceLink.style.transform = rotateNavLink;
    menuContainer.style.display = 'flex';
  } else if (target.matches('#contact')) {
    showContact();
    contactLink.style.color = YELLOW;
    contactLink.style.fontWeight = fontWeightNavLink;
    contactLink.style.transform = rotateNavLink;
    contactContainer.style.display = 'flex';
  }
  mainContent.style.display = 'flex';
}

// Clear nav link styling and page main content with each click on navigation links
function clearNavLinkStyleAndContent() {
  navLinks.forEach((link) => {
    link.style.color = '';
    link.style.fontWeight = '';
    link.style.transform = '';
  });
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
}

// Insert content in the "about" section
function showAbout() {
  mainContent.appendChild(createAbout());
}

// Insert content in the "menu" section
function showMenu() {
  mainContent.appendChild(createMenu());
}

// Insert contact form in the "contact" section
function showContact() {
  mainContent.appendChild(createContact());
}
