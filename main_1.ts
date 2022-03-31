// ES6 匯入
import sayHi from './person';
import './main.scss';

const myDiv = document.getElementById("div1")
if (myDiv !== null) {
    myDiv.innerHTML = `<h2>${sayHi("JUDA", 25)}</h2>`;
}