const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController');
const { getUsers } = require('../models/userModel');
router.get('/', (req, res) => {
    res.send('Hello from "/"');
});

router.post('/register', async (req, res) => {
    try {
        await createUser(req, res);
    } catch (err) {
        throw new Error(err);
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;