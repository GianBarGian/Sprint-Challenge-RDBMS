const knex = require('knex')
const knexConfig = require('../../knexfile').development;
const db = knex(knexConfig);

const getLast = () => {
    return db('actions')
        .limit(1)
        .orderBy('id', 'desc')
        .first();
}

const insert = action => {
    return db('actions')
        .insert(action)
}

module.exports = {
    getLast,
    insert
}