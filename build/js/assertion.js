"use strict";
let a = 'hello';
let b = a;
let c = a;
// console.log(a);
// console.log(b);
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    else
        return '' + a + b;
};
const myVal = addOrConcat(2, 2, 'concat');
// console.log(myVal);
const num = 110;
const test = num;
// console.log(typeof test);
//working with HTML elements
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
// img.src;
// myImg.src;
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
