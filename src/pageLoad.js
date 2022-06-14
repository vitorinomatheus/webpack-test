import {bakeryName, btnsContent, textHead, text1, text2} from './textsrc.js';
import firstImage from '../src/img/aboutimg.jpg';
import './style.css';

const container = document.querySelector('#content');

function pageLoad (){
    const info = document.createElement('div');
    info.classList.add('info');
    info.setAttribute('id', 'info');
    const text = document.createElement('div');
    text.classList.add('text');

    //Info
    const img = document.createElement('img');
    img.src = firstImage;
    info.appendChild(img);

    const textTitle = document.createElement('h3');
    const txt = document.createElement('p');
    const secText = document.createElement('p');
    textTitle.textContent = textHead;
    txt.textContent = text1;
    secText.textContent = text2;
    text.appendChild(textTitle);
    text.appendChild(txt);
    text.appendChild(secText);
    info.appendChild(text);
    
    container.appendChild(info);

    return container;
};

export default pageLoad;