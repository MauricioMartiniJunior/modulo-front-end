import { nanoid } from "nanoid";
import './style.css';

const btn = document.querySelector('button');
const display = document.querySelector('h2');

btn.addEventListener('click', () => {
    let numero = nanoid()
    display.innerHTML= numero;
})
