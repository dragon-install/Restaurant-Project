import img from './images/imageMain.jpg';
const content = document.querySelector('#content');

const mainLoad = () => {  
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

  const navbar = document.createElement('div');
  navbar.className = 'navbar';

  const h1 = document.createElement('h1');
  h1.className = 'main-header';
  h1.textContent = 'Restaurant Odin';
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Fast Food, Fresh!';

  const mainImage = document.createElement('img');
  mainImage.src = img;

  content.append(tabOptions);
  content.append(h1);
  content.append(h2);
  content.append(mainImage);
}

const clearMainContent = () => content.innerHTML = ' ';

export { mainLoad };
export { clearMainContent };
