const express = require('express');
const db = require('./config/db')
const routes = require('./routes/index');

const app = express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.get('/', routes);
app.post('/register', routes);
app.get('/users', routes);


app.listen(port, () => console.log(`index listening on http://localhost:${port}`));