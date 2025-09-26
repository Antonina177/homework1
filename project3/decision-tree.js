let age = 20;
let party = 'Allowed';
let ticket = true;

console.log('====example1=====');

if (age >= 18) {
    console.log(party);
}

if (age >=18 && ticket ) {
    console.log(party);
}

age = 17;
if (age < 18) {
    console.log('Good bye')

}

console.log('====example2=====');

if (age < 12) {
    console.log('Go to sleep!');
  } 
  else if (age >= 12 && age < 18) {
    console.log('Ask your mom');
  } 
  else {
    console.log(party);
  }

console.log('====example3=====');

if (ticket = false) {
    console.log('Buy the ticket');
}
  else if (ticket = null) {
    console.log('No party');
  }
  else {
    console.log(party);
  }
