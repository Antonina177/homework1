
const stringArray = ["apple", "banana", "cherry", "date"];

const numberArray = [10, 20, 30, 40];

const booleanArray = [true, false, true, false];

const anyArray = ["hello", 123, true, "world", false];

stringArray.forEach((fruit, position) => {
    console.log('Position'+ position + ':' + fruit);
  });

anyArray.forEach((fruit, position) => {
    console.log('Position'+ position + ':' + fruit);
  });

console.log('============');

numberArray.forEach((num) => console.log(num * 2));

console.log('============');

const upperStrings = stringArray.map((x) => x.toUpperCase());
console.log(upperStrings);

console.log('============');

const lowercase = upperStrings.map((y) => y.toLowerCase());
console.log(lowercase);

console.log('============');

const invertedBooleans = booleanArray.map((b) => !b);
console.log(invertedBooleans);

console.log('============');

const stringifiedAny = anyArray.map((item) => String(item));
console.log(stringifiedAny); 

console.log('============');

const numbers = [10, 25, 30, 45, 50];
const big = numbers.filter(num => num > 30);
console.log(big);

console.log('============');

const fruits = ['banana', 'apple', 'cherry', 'avocado'];
const sorting = fruits.sort((a, b) => a.localeCompare(b));
console.log(sorting); 

console.log('============');

const mixed = [10, 'hello', true, 25, 'world', false];
const string = mixed.find(item => typeof item === 'string');
console.log(string); 

console.log('============');

const different = [10, 'hello'];
const different2 = [true, 25];
const combined = different.concat(different2);
console.log(combined);