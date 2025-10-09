function sumArray(arr) {
    return arr
        .filter(item => typeof item === 'number')
        .reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const strings = ['1', '2', '3', '4', 'text'];

console.log(sumArray(numbers));
console.log(sumArray(strings));
