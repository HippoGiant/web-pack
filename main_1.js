// ES6 匯入
import {person} from './person_1.js'
console.log(`${person.firstName} ${person.lastName}`);
import './main.scss'; 

const myDiv = document.getElementById("div1")
myDiv.innerHTML =`<h2>${person.firstName} ${person.lastName}</h2>`;