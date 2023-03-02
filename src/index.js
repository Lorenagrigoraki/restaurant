/*This JS file creates all elements of the HOME page*/
import mainImg from '../assets/images.png';
import './styleNav.css'
import './styleHome.css'
import './layoutHome.css'
import {menuPage} from './index2.js'


export const container = document.querySelector('.container')

export const component = (tag, classN, parent) => {
    
    const element = document.createElement(`${tag}`);
    element.classList.add(`${classN}`)
    parent.appendChild(element)

    return element;
  };

/*Create the header*/
const header = component('header', 'header', container)
const ul = component('ul', 'menu', header)
let li;
export let navBtns = []

let navBtn;
for(let i=0; i<3; i++){
  li = component('li','liElem', ul)
  navBtn = component('button', 'navBtn', li)
  navBtns.push(navBtn)
}


navBtns[0].innerHTML = 'Home'
navBtns[1].innerHTML = 'Menu'
navBtns[2].innerHTML = 'Contact'


export function homePage(){
/*Create 2 main divs and append them to container*/ 
const content = component('div', 'content', container)
const divLeft = component('div','left',content)
const divRight = component('div','right', content)

/*Create elements and append them to the page*/
const h1 = component('h1','heading', divLeft)
h1.innerHTML = 'Do you want a healthy meal?'
const p = component('p', 'text', divLeft)
p.innerHTML = 'We will get you the food from best chefs without waiting. Eat healthy food!'
const btn = component('button', 'menuBtn',divLeft)
btn.innerHTML = 'Show the menu'
btn.addEventListener('click', function(){
  content.remove()
  menuPage()
})

const imgDiv = component('div', 'imgDiv', divRight)
const img = component('img', 'mainImg',imgDiv)
img.src = mainImg;
divRight.appendChild(imgDiv)
}
homePage()
