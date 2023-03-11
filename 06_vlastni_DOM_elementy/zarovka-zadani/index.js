console.log('funguju!');

import {Bulb} from '../Bulb/index.js';


const appElm = document.querySelector('#app');

appElm.append(
    Bulb({ isOn: false}),
    Bulb({ isOn: true}),
    Bulb({ isOn: false}),
)