const greet = (name) => {
    return `Hello ${name}`;
}

const h1Elm = document.querySelector('h1');
h1Elm.textContent = greet('Iva');
console.log(greet('Iva'));