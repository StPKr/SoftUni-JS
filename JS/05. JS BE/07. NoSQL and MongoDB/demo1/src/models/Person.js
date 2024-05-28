const mongoose = require('mongoose');

const contactInfoSchema = new mongoose.Schema({
    tel: String,
    email: String
})

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minLength: [2, 'First name must be at least 2 characters long!'],
        maxLength: [10, 'Smth, smth, error message!'],
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: [0, ' Age must be non-negative (current value is {VALUE}}'], //instead of `${}`
        max: 199
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['Hiking', 'Biking', 'Climbing'],
            message: 'Unacceptable hobby'
        }
    },
    contacts: contactInfoSchema,
});

personSchema.methods.sayHello = function () {
    return `${this.firstName} says hello!`;
};

personSchema.virtual('fullName').get(function () {
    return this.firstName + ' ' + this.lastName;
}).set(function (value) {
    const [first, last] = value.split(' ');
    this.firstName = first;
    this.lastName = last;
});

const Person = mongoose.model('Person', personSchema);

module.exports = { Person }