const express = require('express');
const helmet = require('helmet');

const projects = require('./routes/projects/projects');
const err = require('./middlewares/errors/errors');

const app = express();

app.use(helmet());
app.use(express.json());

app.use(projects);

app.use(err.defaultError);

app.listen(5000, () => console.log('port 5000'));