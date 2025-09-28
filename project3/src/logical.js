let a = 5;
const b = 10;
let c = 5;
const d = true;
const s = 'test';

console.log(a == b);
console.log(a == c);
console.log(a !== b);
console.log('===exapmle1===');
console.log(a == b);
console.log(a == c);
console.log(a !== b);
console.log('===example2===');
console.log(a===b);

a = '10test'
c = 5;

console.log('===example3===');
console.log(a == c);
console.log(a === c);

console.log('=== example4===');
a = 'srt1';
c = 'str2'
console.log(a > c);

console.log('=== example5===');
a = 'srt';
c = 'string'
console.log(a > c);
console.log(a < c);
console.log(a = c);

console.log('=== example6===');
console.log(d > c);
c = 's';
console.log(d > c);

console.log('=== example7===');
let x = true;
let y = false;
console.log(x||y);
console.log(x&&y);
console.log(!x);
console.log(!y);

console.log('=== example8===');
console.log(!!1);       
console.log(!!0);       
console.log(!!"Hello"); 
console.log(!!"");  

console.log('=== example9===');
let q = 'JS';
let w = null;
console.log(q ?? w);  

let t = 0;
console.log(t ?? w);       
