// START //

import wheatIcon from './img/wheat-icon.svg';
import ukFlag from './img/flag.svg';
import dkFlag from './img/flag-dk.svg';

export function createLayout() {
  const header = document.createElement('div');
  const headerDecor = document.createElement('img');
  const subHeader = document.createElement('div');
  const navBar = document.createElement('nav');
  const listItem1 = document.createElement('li');
  const listItem1breaker = document.createElement('li');
  const listItem2 = document.createElement('li');
  const listItem2breaker = document.createElement('li');
  const listItem3 = document.createElement('li');
  const language = document.createElement('div');
  const languageUK = document.createElement('img');
  const languageDK = document.createElement('img');
  const main = document.createElement('div');
  // const footer = document.createElement('div');
  // const credits = document.createElement('div');

  // const social = document.createElement('div');
  // const socialFacebook = document.createElement('img');
  // const socialInstagram = document.createElement('img');

  header.classList.add('header');
  headerDecor.classList.add('wheat-decor');
  headerDecor.setAttribute('src', wheatIcon);
  headerDecor.setAttribute('alt', 'wheat branch icon');
  subHeader.classList.add('subheader');
  navBar.classList.add('nav-bar');
  listItem1.classList.add('nav-item');
  listItem1.setAttribute('id', 'about');
  listItem1breaker.classList.add('nav-item-breaker');
  listItem2.classList.add('nav-item');
  listItem2.setAttribute('id', 'produce');
  listItem2breaker.classList.add('nav-item-breaker');
  listItem3.classList.add('nav-item');
  listItem3.setAttribute('id', 'contact');
  language.classList.add('language-select');
  languageUK.classList.add('icon');
  languageUK.classList.add('flag');
  languageUK.setAttribute('src', ukFlag);
  languageUK.setAttribute('alt', 'english language');
  languageDK.classList.add('icon');
  languageDK.classList.add('flag');
  languageDK.setAttribute('src', dkFlag);
  languageDK.setAttribute('alt', 'danish language');
  main.classList.add('main-content');
  // footer.classList.add('footer');
  // credits.classList.add('credits');
  // social.classList.add('social');

  header.textContent = 'Lysbrød';
  subHeader.textContent = '✼ Your local bakery sale ✼';
  listItem1.textContent = 'About';
  listItem1breaker.textContent = '//';
  listItem2.textContent = 'Produce';
  listItem2breaker.textContent = '//';
  listItem3.textContent = 'Contact';
  // credits.textContent = 'Credits';
  // social.textContent = 'Social';

  navBar.append(
    listItem1,
    listItem1breaker,
    listItem2,
    listItem2breaker,
    listItem3
  );
  language.append(languageUK, languageDK);
  // footer.appendChild(credits);
  // footer.appendChild(social);

  return [header, headerDecor, subHeader, navBar, language, main];
}

// END //
