const sumArray = (arr) =>
    arr
        .filter(item => typeof item === 'number')
        .reduce((acc, num) => acc + num, 0);

const numbers = [10, 20, 30, 40];
const strings = ['10', '20', '30'];

console.log(sumArray(numbers));
console.log(sumArray(strings));
