let a = {};
a = {
    name: 'Anna',
    age: 25,
    greet: function(){
        console.log('My name is'+ this.name);
    }
};
a.greet();
console.log(Object.keys(a));
console.log(Object.values(a));
console.log(Object.entries(a));

console.log('============');

const fruits = {
    apple: {
        colour: 'red',
        size: 'small',
        flavour: 'sweet'
    },
    pineapple: {
        colour: 'yellow',
        size: 'big',
        flavour: 'acidy'
    },
    orange: {
        colour: 'orange',
        size: 'medium',
        flavour: 'semisweet'
    }
}
console.log(Object.keys(fruits));
console.log('============');
console.log(Object.values(fruits));
console.log('============');
console.log(Object.entries(fruits));
console.log('======Example2======');
console.log(Object.keys(fruits.apple));
console.log('============');
console.log(Object.values(fruits.apple));
console.log('============');
console.log(Object.entries(fruits.apple));

fruits['banana'] = {
    colour: 'yellow',
    size: 'big',
    flavour: 'very sweet'
};

console.log('======Example3======');
console.log(fruits);

console.log('======Example4======');

  const person = {
    name: 'Anna',
    info: [ 
        {
        bio:
        {
         age: 25,
         gender: 'female',
         nationality: 'ukrainian'
        },
        hobbies:
        {
         winter:'hiking',
         summer: 'swimming'
        }
    },
    {
    family:
    {
     mother: {
        name: 'Inna',
        age: 50
     },
     father: {
        name: 'Yurii',
        age: 60
     }
    }
    }
    ],
    printInfo: function() {
        console.log(this.name + " has hobbies " + Object.values(this.info[0].hobbies));
  }
};
person.printInfo();

  
    
  
