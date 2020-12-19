const fs = require('fs');

const genders = ['M', 'F'];
const femaleNames = ['Ola', 'Ala', 'Maja'];
const maleNames = ['Jan', 'Marek', 'Jakub'];
const lastNames = ['Kowalik', 'Buk', 'Nowak'];

const randChoice = (arr) => { 
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i = 0; i < 20; i++) {
  let person = {};
  
  person.gender = randChoice(genders);
  
  if (person.gender === 'F') {
    person.name = randChoice(femaleNames);
      } else {
        person.name = randChoice(maleNames);
      }
  
  person.surname = randChoice(lastNames);
  
  person.age = Math.floor(Math.random() * 82) + 18;
  
  const phone = [];
  for (let i = 0; i < 9; i++) {
    let numbers = {};
    number = Math.floor(Math.random() * 10);
    phone.push(number);
  }
  person.phone = phone.join("");
  
  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});