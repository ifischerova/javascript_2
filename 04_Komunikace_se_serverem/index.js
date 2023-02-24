const button = document.querySelector('.button');

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
});






