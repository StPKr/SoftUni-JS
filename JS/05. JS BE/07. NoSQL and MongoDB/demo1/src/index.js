const mongoose = require('mongoose');
const { Person } = require('./models/Person');

async function start() {

    const connectionStr = 'mongodb://127.0.0.1/NewDB';
    await mongoose.connect(connectionStr);

    console.log('Database connected');

    // const myPerson = new Person({
    //     name: 'Swynian',
    //     age: 25,
    //     hobbies:[],
    //     contacts:{
    //         tel: '+1-535-5215',
    //         email: 'swyni@email.com',
    //         address: 'London'
    //     }
    // });

    // await myPerson.save();

    // const myPerson = await Person.findOne({ firstName: 'Peter' });

    // console.log(myPerson.sayHello());
    // console.log(myPerson.fullName);

    // // people[0].hobbies.push('Hiking');
    // // await people[0].save();

    // // myPerson.firstName = 'P';
    // myPerson.age = -1;

    await Person.create({
        firstName: "Georrge",
        lastName: "Shockov",
        age: 42,
        hobbies:['Biking']
    });


    // try {
    //     await myPerson.save();
    // } catch (err) {
    //     for (const path in err.errors) {
    //         console.log(err.errors[path].properties);
    //     }
    // };

    mongoose.disconnect();

}

start();
