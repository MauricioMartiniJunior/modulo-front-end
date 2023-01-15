import { nanoid } from "nanoid";

const button = document.querySelector('button');
const display = document.querySelector('h2');

button.addEventListener('click', () => {
    const password = nanoid();
    display.innerText = password;

});
console.log(nanoid());