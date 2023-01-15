import clipboardCopy from "clipboard-copy";
import { nanoid } from "nanoid";
import './style.css';
import copy from 'clipboard-copy';

const button = document.querySelector('button');
const display = document.querySelector('h2');

button.addEventListener('click', () => {
    const password = nanoid();
    display.innerText = password;
});

button.addEventListener('click', (target) => {
    copy(event.target.innerText);
    alert('Senha copiada');
});

console.log(nanoid());