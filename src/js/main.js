"use strict";

import moment from 'moment';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

console.log("siema");

const name = "Kuba";
let age = 20;

console.log(`Nazywam sie ${name} i mam ${age} lat`);

const description = document.querySelector('.about__description--js');
description.innerHTML = '<strong>Cześć</strong> JS';

const hello = (firstName, lastName) => {
    console.log(`Witaj ${firstName} ${lastName}, miło cię widzieć!`);
}

hello('Kuba', 'Szóstko');

// hamburger menu
const menuList = document.querySelector('.menu__list--js');
const listButton = document.querySelector('.menu__button--js');

listButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--visible');
})

// cookies
// console.log(document.cookie);
// document.cookie = "testoweCiastko = wartość";
// document.cookie = "testoweCiastko2 = wartość2";
// console.log(document.cookie);

// local/session storage adding items
// localStorage.setItem('name', 'kuba');
// const person = {
//     name: 'kuba',
//     age: 20
// }

// console.log(JSON.stringify(person));
// const jsonPerson = JSON.stringify(person);

// localStorage.setItem('person', jsonPerson);

// getting items
// const personStringify = localStorage.getItem('person');
// const newPerson = JSON.parse(personStringify);

// console.log(newPerson);

const focusInput = document.querySelector('.focus--js');

if (localStorage.getItem('focusInput')) {
    focusInput.value = localStorage.getItem('focusInput');
}

focusInput.addEventListener('keyup', (e) => {
    localStorage.setItem('focusInput', e.target.value);
});