const User = require('../models/userModel');
const bcrypt = require("bcrypt");

async function createUser(req, res) {
    const { username, name, surname } = req.body;
    let { password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10)

    if (!username || !name || !surname || !password) {
        return res.status(400).json({ message: 'Todos los campos son requeridos.' });
    }

    try {
        const user = new User(username, name, surname, hashedPassword);

        await user.createUser();

    } catch (err) {
        throw new Error(err);
    }

}

async function getUsers() {
    return await User.getUsers();

}

module.exports = { createUser, getUsers };