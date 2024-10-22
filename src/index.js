const express = require('express');
const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', routes);

app.listen(port, () => console.log(`index listening on http://localhost:${port}`));