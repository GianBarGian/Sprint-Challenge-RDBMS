const express = require('express');
const helmet = require('helmet');

const err = require('./middlewares/errors/errors');

const app = express();

app.use(helmet());
app.use(express.json());

app.get('/api', (req, res, next) => {
    res.json({message: 'yo'})
})

app.use(err.defaultError);

app.listen(5000, () => console.log('port 5000'));