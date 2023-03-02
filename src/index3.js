/*This JS file create all elements of the CONTACT page*/
import {container, component } from "./index.js";
import './layoutContact.css'

export function contactPage(){
    const detailsCont = component('div', 'details', container)

    const divDetails = component('div', 'detText', detailsCont)
    divDetails.innerText = '-Details-'

    const phone = component('div', 'phone', detailsCont)
    phone.innerText = 'Phone: '
    const phoneLink = component('a','phoneNumber',phone)
    phoneLink.setAttribute("href",
    "+123456789");
    phoneLink.innerText = '+123456789'

    const email = component('div', 'email', detailsCont)
    email.innerText = 'Email: '
    const emailLink = component('a','emailLink',email)
    emailLink.setAttribute("href",
    "someEmail@adress.com");
    emailLink.innerText = 'someEmail@adress.com'

    const aderess = component('div', 'adress', detailsCont)
    aderess.innerText = 'Address: Lorem Ipsum, Dolor sit amet, Consectetur adipiscing elit'
}
