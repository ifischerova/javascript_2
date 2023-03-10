export const Dice = (props) => {
    const {side} = props;

    const diceElm = document.createElement('div');
    diceElm.classList.add('dice');
    diceElm.innerHTML= `<div class="dice__side dice__side--${side}"></div><button class="btn btn--small roll-btn">hodit</button>`;

    const btnElm = document.querySelector('.btn');
    btnElm.addEventListener('click', () => {
        
    })

    return diceElm;
}