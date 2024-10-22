const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/userController')
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

module.exports = router;