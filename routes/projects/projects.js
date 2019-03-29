const express = require('express');
const prjHlp = require('./prjHelper');
const err = require('../../middlewares/errors/errorsObj');

const projects = express.Router();

projects.use(express.json());

projects.get('/api/projects/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
        const project = await prjHlp.getPrjById(id);
        const actions = await prjHlp.getActByPrjId(id)
        res.json({
            ...project,
            actions: actions,
        })
    } catch  {
        next(err.error500);
    }
})

module.exports = projects;