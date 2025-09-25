// arifmetics.js
// Приклади змінних різних типів і арифметичних операцій

const num1 = 10;
const num2 = 3;
const floatNum = 3.5;

const strNum = "7";      // строка, яка містить число
const strText = "Hello"; // звичайна строка

const boolTrue = true;
const boolFalse = false;

console.log('=== number with number ===');
console.log('num1 + num2 =', num1 + num2);
console.log('num1 - num2 =', num1 - num2);
console.log('num1 * num2 =', num1 * num2);
console.log('num1 / num2 =', num1 / num2);
console.log('num1 % num2 =', num1 % num2);
console.log('num1 ** num2 =', num1 ** num2);

console.log('\n=== number with float ===');
console.log('num1 + floatNum =', num1 + floatNum);
console.log('num1 - floatNum =', num1 - floatNum);
console.log('num1 * floatNum =', num1 * floatNum);
console.log('num1 / floatNum =', num1 / floatNum);

console.log('\n=== string with string ===');
console.log('strText + " world" =', strText + ' world');

console.log('\n=== number with string ===');
console.log('num1 + strNum =', num1 + strNum);   // + зі строкою = конкатенація
console.log('num1 - strNum =', num1 - strNum);   // - змушує JS привести рядок до числа
console.log('num1 * strNum =', num1 * strNum);
console.log('num1 / strNum =', num1 / strNum);

console.log('\n=== boolean arithmetic ===');
console.log('boolTrue + boolFalse =', boolTrue + boolFalse); // true->1, false->0
console.log('boolTrue + num2 =', boolTrue + num2);
console.log('num2 * boolTrue =', num2 * boolTrue);
console.log('strNum + boolTrue =', strNum + boolTrue); // рядок + булеве -> конкатенація

console.log('\n=== explicit conversion ===');
console.log('+strNum + num1 =', +strNum + num1);              // унарний + перетворює рядок у число
console.log('Number(strNum) + num1 =', Number(strNum) + num1);

console.log('\n=== NaN example ===');
console.log('"abc" * 2 =', "abc" * 2); // множення нечислової строки -> NaN