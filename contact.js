const content = document.querySelector('#content');

const contactLoad = () => {
  //navbar
  const tabOptions = document.createElement('ul');
  tabOptions.className = 'tab-options';
  tabOptions.style.listStyleType = 'none';

  const mainOption = document.createElement('li');
  mainOption.className = 'main';
  mainOption.textContent = 'Main';

  const menuOption = document.createElement('li');
  menuOption.className = 'menu';
  menuOption.textContent = 'Menu';

  const contactOption = document.createElement('li');
  contactOption.className = 'contact';
  contactOption.textContent = 'Contact';

  tabOptions.append(mainOption);
  tabOptions.append(menuOption);
  tabOptions.append(contactOption);

  content.append(tabOptions);

  const h1 = document.createElement('h1');
  h1.className = 'header';
  h1.textContent = 'Contact Information';

  const phone =  document.createElement('div');
  phone.className = 'phone';
  phone.textContent = 'Reach Out To Us: XXX-XXX-XXXX';

  const location = document.createElement('div');
  location.className = 'location';
  location.textContent = '123 Fake St. Happy Valley, AK, XXXXX';

  content.append(h1);
  content.append(phone);
  content.append(location);
}

const clearContactContent = () => content.innerHTML = ' ';

export { contactLoad };
export { clearContactContent };