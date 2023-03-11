export const Bulb = (props) => {
    const { isOn } = props;

    //create bulb in the page with default class bulb
    const bulbElm = document.createElement('div');
    bulbElm.classList.add('bulb');

    // if the bulb is on, add class for lightning bulb
    if(isOn) {
      bulbElm.classList.add('bulb--on'); 
    }

    // let the bulb be on or off
    bulbElm.addEventListener('click', () => {
        bulbElm.replaceWith(Bulb({ isOn : !isOn}));
    });

    return bulbElm;
}