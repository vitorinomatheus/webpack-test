import {foodNames, foodPrices} from "./textsrc";
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
        let name = document.createElement('h3');
        let price = document.createElement('p');
        let foodInfo = document.createElement('div');

        price.textContent = foodPrices[i];
        name.textContent = foodNames[i];
        img.src = options[i];


        food.appendChild(img);
        foodInfo.appendChild(name);
        foodInfo.appendChild(price);
        food.appendChild(foodInfo);
        info.appendChild(food);
    }

    container.appendChild(info);

    return container;
}

export default loadMenu;