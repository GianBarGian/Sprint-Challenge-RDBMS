const express = require('express');
const actHlp = require('./actHelper');
const err = require('../../middlewares/errors/errorsObj');
const mappers = require('../../mappers');

const actions = express.Router();

actions.use(express.json());

actions.post('/api/actions', async (req, res, next) => {
    try {
        await actHlp.insert(req.body);
        const last = await actHlp.getLast();
        res.json(last);
    } catch {
        next(err.error500)
    }
})

module.exports = actions;