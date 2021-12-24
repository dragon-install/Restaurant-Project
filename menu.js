import img from './images/fried-chicken.jpg';
import img2 from './images/pasta.jpg';
import img3 from './images/pizza.jpg';
import img4 from './images/salad.jpg';

const content = document.querySelector('#content');

const menuLoad = () => {
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
  
  //set images
  const itemOneImage = document.createElement('img');
  itemOneImage.style.height = '200px';
  itemOneImage.style.width = '200px';
  itemOneImage.src = img;

  const itemTwoImage = document.createElement('img');
  itemTwoImage.style.height = '200px';
  itemTwoImage.style.width = '200px';
  itemTwoImage.src = img2;
  
  const itemThreeImage = document.createElement('img');
  itemThreeImage.style.height = '200px';
  itemThreeImage.style.width = '200px';
  itemThreeImage.src = img3;
  
  const itemFourImage = document.createElement('img');
  itemFourImage.style.height = '200px';
  itemFourImage.style.width = '200px';
  itemFourImage.src = img4;


  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';

  const menuDisplay = document.createElement('div');
  menuDisplay.className = 'menu-display';

  const itemOne = document.createElement('div');
  itemOne.className = 'item-one';
  itemOne.append(itemOneImage);

  const itemTwo = document.createElement('div');
  itemTwo.className = 'item-two';
  itemTwo.append(itemTwoImage);

  const itemThree = document.createElement('div');
  itemThree.className = 'item-three';
  itemThree.append(itemThreeImage);

  const itemFour = document.createElement('div');
  itemFour.className = 'item-four';
  itemFour.append(itemFourImage);

  //put menu items in grid container
  menuDisplay.append(itemOne);
  menuDisplay.append(itemTwo);
  menuDisplay.append(itemThree);
  menuDisplay.append(itemFour);
  
  //append to content div
  content.append(h1);
  content.append(menuDisplay);
}

const clearMenuLoad = () => content.innerHTML = ' ';

export { menuLoad };
export { clearMenuLoad };