const knex = require('knex')
const knexConfig = require('../../knexfile').development;
const db = knex(knexConfig);



const getLast = () => {
    return db('projects')
        .limit(1)
        .orderBy('id', 'desc')
        .first();

}

const getPrjById = id => {
    return db('projects')
        .where({ id })
        .first();
}

const getActByPrjId = id => {
    return db('actions')
        .where({ projectId: id })
}

const insert = project => {
    return db('projects')
        .insert(project, ['id'])
}

module.exports = {
    getPrjById,
    getActByPrjId,
    insert, 
    getLast
}