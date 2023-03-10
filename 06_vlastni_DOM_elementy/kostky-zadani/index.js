const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

import {Dice} from '../Dice/index.js';

const dices = document.querySelector('#dice-row');


dices.append(
  Dice({ side: 1 }),
  Dice({ side: 5 }),
  Dice({ side: 3 }),
  Dice({ side: 2 }),
)

