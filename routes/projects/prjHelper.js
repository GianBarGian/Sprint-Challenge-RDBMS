const knex = require('knex')
const knexConfig = require('../../knexfile').development;
const db = knex(knexConfig);


const getPrjById = id => {
    return db('projects')
        .where({ id })
        .first();
}

const getActByPrjId = id => {
    return db('actions')
        .where({ projectId: id })
}

module.exports = {
    getPrjById,
    getActByPrjId,
}