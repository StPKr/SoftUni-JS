const bcrypt = require('bcrypt');
const { User } = require('../model/User');

seed()
async function seed() {
    try {
        await register('peter', '123');
    } catch (err) {
        console.log('Database already seeded');
    }
}

async function register(username, password) {
    const existing = await User.findOne({ username });
    if (existing) {
        throw new Error('Username is taken!');
    }

    const user = new User({
        username,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    await user.save();

    console.log('Created new user', username);

    return user;
}

async function login(username, password) {
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.hashedPassword))) {
        console.log('Incorrect password for user', username)
        throw new Error('Incorrect username or password');
    }

    console.log('Logged in as', username);

    return user;
}

async function getUserData() {
    return await User.find();
}

module.exports = {
    register,
    login,
    getUserData
}