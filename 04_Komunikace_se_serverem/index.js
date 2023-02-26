// 1. Vychod a zapad Slunce
/*const button = document.querySelector('.button');

button.addEventListener('click', () => {
fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const {sunrise , sunset} = data.results;
        document.querySelector('#sunrise-sunset').innerHTML = `
        <p>Vychod slunce: ${sunrise}</p>
        <p>Zapad slunce: ${sunset}</p>
        `;
    });
});*/


// 2. Generator hesel
/*const hesloApi = fetch('https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=8')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
*/




// Uzivatel muze zadat delku hesla sam pomoci prompt
const passwordLength = prompt('Zadej pocet znaku pro heslo:')
const passwordButton = document.querySelector('#new-password-button');
passwordButton.addEventListener('click', () => {
fetch(`https://apps.kodim.cz/daweb/trening-api/apis/passwords?length=${passwordLength}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const password = data.password;
        document.querySelector('#show-new-password').innerHTML = `
            ${password}
        `;
    });
});

//TODO uzivatel si zada delku hesla do formularoveho pole









