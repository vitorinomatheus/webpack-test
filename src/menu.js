import {bakeryName, btnsContent, textHead, text1, text2} from "./textsrc";
import './style.css';
import croissant from "./img/croissant.jpg";
import pateachoux from "./img/pateachoux.jpg";
import cinnamon from "./img/cinnamonroll.jpg";
import cake from "./img/cake.jpg";
import baguette from "./img/baguette.jpg";
import wholemeal from "./img/wholemealbread.jpg";

const container = document.querySelector('#content');

function loadMenu(){
    const info = document.createElement('div');
    info.classList.add('infoMenu');
    info.setAttribute('id', 'info');

    //Menu
    const options = [croissant, pateachoux, cake, wholemeal, cinnamon, baguette]
    for(let i = 0; i < 6; i++)
    {
        let food = document.createElement('div');
        let img = document.createElement('img');
        img.src = options[i];
        food.appendChild(img);
        info.appendChild(food);
    }

    container.appendChild(info);

    return container;
}

export default loadMenu;