const db = require('../data/db-config.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

//Displays all schemes in db
function find() {
    return db('schemes');
}

//Finds a scheme based on the id passed in
function findById(id) {
    return db('schemes').where({id});
}

function findSteps(id) {
    return db('schemes as sc')
    .join('steps as st', 'sc.id', 'st.scheme_id')
    .select('st.step_number', 'sc.id', 'st.instructions')
    .where('sc.id', id) //Why can't I defactor id out here???
    .orderBy('st.step_number');
}

// function findSteps(id) {
//     return db('steps as st')
//     .join('schemes as sc', 'st.scheme_id', 'sc.id')
//     .select('st.step_number','st.instructions', 'sc.id')
//     .where('sc.id','=', id)
//     .orderBy('st.step_number');
// }

function add(scheme) {
    return db('schemes').insert(scheme);
}

function update(scheme, id) {
    return db('schemes').where({id}).update(scheme);
}

function remove (id) {
    return db('schemes').where({id}).del();
}
