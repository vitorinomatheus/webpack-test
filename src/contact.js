import './style.css';

const container = document.querySelector('#content');

function loadContact(){
    const info = document.createElement('div');
    info.classList.toggle('infoContact');
    info.setAttribute('id', 'info');

    //Contact
    const contactTitle = document.createElement('h1');
    const storeOne = document.createElement('div');
    const storeTwo = document.createElement('div');

    contactTitle.textContent = 'VISIT OR CONTACT ONE OF OUR STORES';
    info.appendChild(contactTitle);

    const store1Name = document.createElement('h2');
    store1Name.textContent = 'Breadland Unit';
    const store1Address = document.createElement('p');
    store1Address.textContent = "899 Bake st., Breadland, BL.";
    const store1Mail = document.createElement('p');
    store1Mail.textContent = 'breadlandunit@bakery.com';
    const store1Phone = document.createElement('p')
    store1Phone.textContent = '(555) 555-5555';

    let store1Categories = [store1Name, store1Address, store1Mail, store1Phone];

    for(let i = 0; i < 4; i++){
        storeOne.appendChild(store1Categories[i]);
    }    

    const store2Name = document.createElement('h2');
    store2Name.textContent = 'Crémeuse Unit';
    const store2Address = document.createElement('p');
    store2Address.textContent = '52 Rue du pain, Terre des gâteaux, TG.';
    const store2Mail = document.createElement('p');
    store2Mail.textContent = 'cremeuseunit@bakery.com';
    const store2Phone = document.createElement('p');
    store2Phone.textContent = '01-12-34-56-78';

    let store2Categories = [store2Name, store2Address, store2Mail, store2Phone];

    for(let i = 0; i < 4; i++){
        storeTwo.appendChild(store2Categories[i]);
    }

    info.appendChild(storeOne);
    info.appendChild(storeTwo);

    container.appendChild(info);
}

export default loadContact;