import pageLoad from './pageLoad.js';
import loadMenu from './menu.js';
import loadHeader from './header.js';

loadHeader();
pageLoad();

const btn0 = document.querySelector('.Home');
const btn1 = document.querySelector('.Menu');
let info = document.querySelector('#info');

btn0.addEventListener('click', () => {
    info.remove();
    pageLoad();
    info = document.querySelector('#info');
});

btn1.addEventListener('click', () => {
    info.remove();
    loadMenu()
    info = document.querySelector('#info');
});

//escrever função activate buttons para ser chamada depois da geração de cada página