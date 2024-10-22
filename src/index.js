const express = require('express');
const db = require('./config/db')
const routes = require('./routes/index');
const { createUser } = require('./controllers/userController');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.use('/api/users', routes);

app.get('/', routes);


app.listen(port, () => console.log(`index listening on http://localhost:${port}`));