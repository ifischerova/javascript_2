const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = [
  'Petr',
  'Jana',
  'Pavel',
  'Zuzana',
  'Eva',
  'Adam',
  'Onyx',
  'Alex',
];
const persons = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 22, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
  { name: 'Alex', age: 29, gender: 'androgyne' },
];

//Vyhledavani a dotazy
//a. 
persons.forEach((person) => console.log(person.age));

//b.
persons.forEach((person) => {
    console.log(person.name[0]);
})

// c. pomoci find najdi v persons osobu se jmenem Adam a vypis ji do konzole
const personAdam = persons.find((person) => person.name === 'Adam')
console.log(personAdam.name)

// d. vypis gender osoby se jmenem Onyx
persons.forEach((person) => {
    if (person.name === 'Onyx') {
        console.log(person.gender);
    }
});

const gender = persons.find((person) => person.name === 'Onyx').gender

console.log(gender)


// e. pomoci  findIndex najdi v persons index osoby s vekem 22 a muzskym genderem
//console.log(names.findIndex((name) => name === 'Onyx'))

console.log(persons.findIndex((person) => person.age === 22 && person.gender === 'male'))

// f. Pomoci some zjisti jestli je v numbers cislo delitelne 11.
console.log(numbers.some((number) => number % 11 === 0))

// g. Pomoci some zjisti, jestli jsou v persons osoby nebinarniho pohlavi
console.log(persons.some((person) => person.gender !== 'male' || person.gender !== 'female'))

// h. Pomoci every zjisti, jestli jsou v persons vsichni starsi 18 let

console.log(persons.every((person) => person.age > 18))