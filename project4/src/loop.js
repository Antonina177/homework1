console.log('from 0 to 9 using for loop');

for (let i = 0; i <= 9; i++) {
    console.log(i);
};

console.log('from 100 to 0 with step 10 using for loop');

for (let j = 100; j >= 0; j -= 10) {
    console.log(j);
}

console.log('from 0 to 9 using while loop');

let s=0;
while (s <= 9){
    console.log(s);
    s++;
};

console.log('from 100 to 0 with step 10 using while loop');

let t = 100;
while (t >= 0) {
    console.log(t);
    t -= 10;
};
