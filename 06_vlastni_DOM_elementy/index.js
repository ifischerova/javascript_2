// Vytvoreni tlacitek - cviceni vlastni DOM elementy - tlacitko

const buttonElm = document.createElement('button');
buttonElm.textContent = 'Mackej';
buttonElm.classList.add('btn');

const buttonElm2 = document.createElement('button');
buttonElm2.textContent = 'Button';
buttonElm2.classList.add('btn');

const buttonElm3 = document.createElement('button');
buttonElm3.textContent = 'Koukej';
buttonElm3.classList.add('btn');

// Pridani tlacitek do page
const appElm = document.querySelector('#app');
appElm.append(buttonElm, buttonElm2, buttonElm3);


//Cviceni vlastni DOM elementy - kontakty

// Vytvoreni divu s kontakty
const contact1 = document.createElement('div');
contact1.classList.add('contact');
contact1.innerHTML = 
`<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>`

const contact2 = document.createElement('div');
contact2.classList.add('contact');
contact2.innerHTML = 
`<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>`

const contact3 = document.createElement('div');
contact3.classList.add('contact');
contact3.innerHTML = 
`<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>`


// Pridani divu do stranky
appElm.append(contact1, contact2, contact3);