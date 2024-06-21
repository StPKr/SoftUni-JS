const { User } = require('../models/User');
const bcrypt = require('bcrypt');

async function register(username, email, password) {
    const existingEmail = await User.findOne({ email });
    const existingUsername = await User.findOne({ username });

    if (existingEmail) {
        throw new Error(`This email is already in use!`);
    }

    if (existingUsername) {
        throw new Error(`This username is already in use!`);
    }

    const user = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();

    return user;
}

async function login(email, password) {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error(`Incorrect email or password!`);
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error(`Incorrect email or password!`);
    }
    return user;
}

module.exports = {
    register,
    login
};