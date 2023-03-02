/*This JS file creates all elements of the MENU page*/
import {container, component } from "./index.js";
import imgMeal1 from '../assets/meal1.png';
import imgMeal2 from '../assets/meal2.png';
import imgMeal3 from '../assets/meal3.png';
import imgMeal4 from '../assets/meal4.png';
import imgMeal5 from '../assets/meal5.png';
import imgMeal6 from '../assets/meal6.png';
import './styleMenu.css'
import './layoutMenu.css'


export function menuPage(){
  const ourMenu = component('h2', 'ourMenu', container)
  ourMenu.innerText = 'Our Menu'
  
  let mealsElemArray = []
  let meal
  const mealsMenu = component('div', 'mealsMenu', container)  
  
  for(let i =0; i<6; i++){
    const mealCard = component('div', 'mealsCard', mealsMenu) 
    meal = {
      img: component('img', 'mealImg', mealCard),
      mealName: component('div','divName', mealCard),      
      divPrice: component('div','divPrice', mealCard),
      descr: component('div', 'divDescr',mealCard)        
    }
    mealsElemArray.push(meal)
  /*Meal factory function*/
  const mealFactory = (name, price, imgSrc, description) => {
    return {name, price, imgSrc, description};
  };
  /*Fill all meals with content*/
  const meal1 = mealFactory('Green salad with salmon.', 'Price: 15$', imgMeal1, 'This salad is made from tomatoes, onions and greens.')
  const meal2 = mealFactory('Bulgur with green beans and chiken.', 'Price: 19$', imgMeal2, 'Delicious chiken with bulgur and beans.')
  const meal3 = mealFactory('Asparagus with salmon.', 'Price: 20$', imgMeal3, 'Asparagus, tomatoes and salmon. Could that be better?')
  const meal4 = mealFactory('Salad with carrots and tomatoes with salmon.', 'Price: 20$', imgMeal4, 'The bestseller of our restaurant.')
  const meal5 = mealFactory('Asparagus with salmon.', 'Price: 20$', imgMeal5, 'Asparagus, tomatoes and salmon. Could that be bette?')
  const meal6 = mealFactory('Broccolli and patotoes with beef patty', 'Price: 20$', imgMeal6, 'You should try this dish. Maybe it will become your favorite?')
  
  const mealInfo = [meal1, meal2, meal3, meal4, meal5, meal6]
  
  mealsInfo(mealsElemArray,mealInfo)

}}

function mealsInfo(arrayDiv, arrayInf){
  for(let i = 0; i<arrayDiv.length; i++){
    arrayDiv[i].img.src = arrayInf[i].imgSrc
    arrayDiv[i].mealName.innerText = `${arrayInf[i].name}`
    arrayDiv[i].divPrice.innerText = `${arrayInf[i].price}`
    arrayDiv[i].descr.innerText = `${arrayInf[i].description}`
  }
}