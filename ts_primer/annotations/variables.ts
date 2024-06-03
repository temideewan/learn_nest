let apples = 5;

let speed = 'fast';

let nothingMuch = null;

let nothing = undefined;

let now = new Date();

// arrays
let colors = ['red', 'green', 'blue', 'yellow'];

// class
class Car {}

let car = new Car();

// object literal
let point = {
  x: 0,
  y: 0,
};

// Function
const logNumber = (i) => {
  console.log(i);
};


const json = '{"x":0,"y": 0}'

const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue', ]
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
