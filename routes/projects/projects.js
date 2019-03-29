const express = require('express');
const prjHlp = require('./prjHelper');
const err = require('../../middlewares/errors/errorsObj');
const mappers = require('../../mappers');

const projects = express.Router();

projects.use(express.json());

projects.get('/api/projects/last', async (req, res, next) => {
    try{
        const last = await prjHlp.getLast();
        res.json(last);
    } catch {
        next(err.error500);
    }
})

projects.get('/api/projects/:id', async (req, res, next) => {
    const { id } = req.params;
    try{
        let project = await prjHlp.getPrjById(id);
        const actions = await prjHlp.getActByPrjId(id);
        project = {
            ...project,
            actions: actions,
        }
        project = mappers.projectToBody(project);
        res.json(project)
    } catch  {
        next(err.error500);
    }
})



projects.post('/api/projects', async (req, res, next) => {
    try {
        await prjHlp.insert(req.body);
        let last = await prjHlp.getLast();
        last = mappers.projectToBody(last);
        res.json(last);
    } catch {
        next(err.error500);
    }
})

module.exports = projects;