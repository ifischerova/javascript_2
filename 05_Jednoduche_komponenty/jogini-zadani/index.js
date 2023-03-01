import {Header} from '../Header/index.js';
import {Intro} from '../Intro/index.js';
import {Pose} from '../Pose/index.js';


console.log('funguju!');

const pageData = {
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
           něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
           Postupně se seznámíte se základními principy jógy, jak přístupovat k
           sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
           svoje tělo, pocity a emoce.`,
    src: 'img/yoga-pose.jpg',
}

const renderPage = (pageData) => {  
    const page = document.querySelector('#app'); 

    page.innerHTML = Header({title:pageData.title, link:pageData.links.map((link) => link)}) + Intro({heading:pageData.heading, text:pageData.text}) + Pose({img:pageData.src})
}

renderPage(pageData);
const link = pageData.links;
console.log(link)