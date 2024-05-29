const { MongoClient } = require('mongodb');

async function start() {

    const connectionStr = 'mongodb://127.0.0.1';
    const client = new MongoClient(connectionStr, {
        useUnifiedTopology: true
    });

    await client.connect();

    const db = client.db('TestDB');
    const collection = db.collection('courses');
    const cursor = collection.find({});
    const results = await cursor.toArray();

    console.log(results);

}

start();

//MongoDB driver without mongoose