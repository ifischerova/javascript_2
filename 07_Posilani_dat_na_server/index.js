const button = document.querySelector('#vote-button');

const input = document.querySelector('#name');

button.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('https://apps.kodim.cz/daweb/hlasovani/api/poll/1', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            optionId: 1,
            voterName: input.value,
        }),
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        if (data.code === "multiple-votes") {
            document.body.textContent = data.message;
        }
    });
});