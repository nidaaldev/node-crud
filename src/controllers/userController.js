const User = require('../models/userModel');

async function createUser(req, res) {
    const { username, name, surname, password } = req.body;

    if (!username || !name || !surname || !password) {
        return res.status(400).json({ message: 'Todos los campos son requeridos.' });
    }

    try {
        const user = new User(username, name, surname, password);

        await user.createUser();

    } catch (err) {
        throw new Error(err);
    }

}

module.exports = { createUser };