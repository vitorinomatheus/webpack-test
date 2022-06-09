import {bakeryName, btnsContent, textHead, text1, text2} from './textsrc.js';

const container = document.querySelector('#content');

function pageLoad (){
    const header = document.createElement('div');
    header.classList.add('header');
    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns');
    const info = document.createElement('div');
    info.classList.add('info');
    const text = document.createElement('div');
    text.classList.add('text');

    //Header
    const title = document.createElement('h1');
    title.textContent = bakeryName;
    header.appendChild(title);

    for(let i = 0; i < 3; i++){
        let btn = document.createElement('button');
        btn.textContent = btnsContent[i];
        btnsDiv.appendChild(btn);
    }
    header.appendChild(btnsDiv);

    //Info
    const img = document.createElement('img');
    img.src = '../src/aboutimg.jpg';
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
    
    container.appendChild(header);
    container.appendChild(info);

    return container;
};

export default pageLoad();