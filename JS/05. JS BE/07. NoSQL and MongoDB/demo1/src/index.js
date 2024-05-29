const mongoose = require('mongoose');
const { Person } = require('./models/Person');
const { Article } = require('./models/Article');

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

    // await Person.create({
    //     firstName: "Georrge",
    //     lastName: "Shockov",
    //     age: 42,
    //     hobbies:['Biking']
    // });

    const peter = await Person.findOne({ firstName: 'Peter' });

    // await Article.create({
    //     content: 'First article',
    //     author: peter
    // });

    const result = await Article.find().populate('author', 'firstName lastName');
    console.log(result);

    // const peter = await Person.findById('6656266f82709ac6ff55f178');

    // console.log(peter);

    // peter.lastName = 'Humbert';

    // await Person.findByIdAndUpdate('6656266f82709ac6ff55f178', { $set: { age: 50 } });

    // await Person.deleteMany({ firstName: 'Peter' }); //опасно! ако е undefined трие всичко!!!

    // console.log(await Person.countDocuments());
    // console.log(await Person.countDocuments({age: 29}));
    // console.log(await Person.find({age:{$lt: 30}}));

    // const result = await (await Person.find().where('age').gt(30).select('firstName lastName').sort({ age: 1 }).skip(2).limit(2));
    // console.log(result);

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
