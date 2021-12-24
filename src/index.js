import { mainLoad } from '../main';
import { clearMainContent } from '../main';
import { menuLoad } from '../menu';
import { clearMenuLoad } from '../menu';
import { contactLoad } from '../contact';
import  { clearContactContent } from '../contact';
import '../main.css';
import '../menu.css';

mainLoad();

document.addEventListener('click', e => {
  if(e.target.matches('.menu')) {
    clearMainContent();
    clearContactContent();
    menuLoad();
  } else if(e.target.matches('.contact')) {
    clearMainContent();
    clearMenuLoad();
    contactLoad();
  } else if(e.target.matches('.main')) {
    clearContactContent();
    clearMenuLoad();
    mainLoad();
  }
});

