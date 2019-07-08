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