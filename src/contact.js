// START //

export function createContact() {
  const contact = document.createElement('div');
  const contactHeader = document.createElement('h4');
  const form = document.createElement('form');
  const ul = document.createElement('ul');
  const liOne = document.createElement('li');
  const liTwo = document.createElement('li');
  const liThree = document.createElement('li');
  const liFour = document.createElement('li');
  const liFive = document.createElement('li');
  const liSix = document.createElement('li');
  const nameLabel = document.createElement('label');
  const nameInput = document.createElement('input');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const subjectLabel = document.createElement('label');
  const subjectInput = document.createElement('input');
  const messageLabel = document.createElement('label');
  const messageInput = document.createElement('textarea');
  const privacyLabel = document.createElement('label');
  const privacyInput = document.createElement('input');
  const submit = document.createElement('button');

  contact.classList.add('contact-container');

  contactHeader.textContent = '✼ Contact us ✼';

  form.setAttribute('action', '#');
  form.setAttribute('method', 'post');
  form.setAttribute('id', 'contact-form');

  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name';
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'user_name');
  nameInput.setAttribute('required', '');

  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'E-mail';
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'user_email');
  emailInput.setAttribute('required', '');

  subjectLabel.setAttribute('for', 'subject');
  subjectLabel.textContent = 'Subject';
  subjectInput.setAttribute('type', 'text');
  subjectInput.setAttribute('id', 'subject');
  subjectInput.setAttribute('name', 'message_subject');
  subjectInput.setAttribute('required', '');

  messageLabel.setAttribute('form', 'contact-form');
  messageLabel.textContent = 'Message';
  messageInput.setAttribute('placeholder', 'Write message here...');
  messageInput.setAttribute('maxlength', '600');
  messageInput.setAttribute('name', 'message_text');
  messageInput.setAttribute('rows', '5');
  messageInput.setAttribute('spellcheck', 'true');
  messageInput.setAttribute('wrap', 'soft');
  messageInput.setAttribute('required', '');

  privacyLabel.setAttribute('for', 'privacy');
  privacyLabel.textContent = 'Accept our privacy policy';
  privacyInput.setAttribute('type', 'checkbox');
  privacyInput.setAttribute('id', 'privacy');
  privacyInput.setAttribute('name', 'acknowledge_privacy');
  privacyInput.setAttribute('value', 'yes');
  privacyInput.setAttribute('required', '');

  submit.setAttribute('id', 'contact-submit');
  submit.setAttribute('type', 'submit');
  submit.textContent = 'Send';

  liOne.append(nameLabel, nameInput);
  liTwo.append(emailLabel, emailInput);
  liThree.append(subjectLabel, subjectInput);
  liFour.append(messageLabel, messageInput);
  liFive.append(privacyInput, privacyLabel);
  liSix.append(submit);
  ul.append(liOne, liTwo, liThree, liFour, liFive, liSix);
  form.append(ul);
  contact.append(contactHeader, form);

  return contact;
}
