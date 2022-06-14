import {bakeryName, btnsContent} from './textsrc';

const content = document.querySelector('#content');

function loadHeader(){
    const header = document.createElement('div');
    header.classList.add('header');
    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns');

    const title = document.createElement('h1');
    title.textContent = bakeryName;
    header.appendChild(title);

    for(let i = 0; i < 3; i++){
        let btn = document.createElement('button');
        btn.textContent = btnsContent[i];
        btn.classList.toggle(`${btnsContent[i]}`);
        btnsDiv.appendChild(btn);
    }
    header.appendChild(btnsDiv);

    content.appendChild(header);

    return content;
}

export default loadHeader;