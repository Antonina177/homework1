const user = {
    name: 'Olena',
    age: 25,
    contact: {
        email: 'olena@yopmail.com',
        phone: '38044343434334'
    },

    get summary() {
        return `${this.name}, ${this.age} years old (email: ${this.contact.email})`;
    },

    set updateAge(newAge) {
        if (typeof newAge === 'number' && newAge > 0) {
            this.age = newAge;
        } else {
            console.log('Invalid age');
        }
    },

    getEmailLength() {
        return this.contact.email.length;
    }
};

console.log(user.summary);
user.updateAge = 30;
console.log(user.summary);
console.log('Email length:', user.getEmailLength());
