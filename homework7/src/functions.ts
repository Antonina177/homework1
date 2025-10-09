function sumArray(arr: (number | string | unknown)[]): number {
    return arr
        .filter((item): item is number => typeof item === 'number')
        .reduce((acc, num) => acc + num, 0);
}

const numbers: number[] = [1, 2, 3, 4, 5];
const strings: string[] = ['1', '2', '3', '4', '5'];

console.log(sumArray(numbers));
console.log(sumArray(strings));
