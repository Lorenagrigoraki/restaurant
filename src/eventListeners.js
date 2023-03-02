import { homePage, navBtns } from "./index.js";
import {menuPage} from './index2.js'
import {contactPage} from './index3.js'
import {container } from "./index.js";

export function remove(){
  while (container.childNodes.length > 1) {
    container.removeChild(container.lastChild);
  }
}

navBtns[0].addEventListener("click", function(){
  remove();
  homePage()
})
navBtns[1].addEventListener("click", function(){
  remove();
  menuPage()
})
navBtns[2].addEventListener("click", function(){
  remove();
  contactPage()
})


