//Getting db config object
const db = require('../data/db-config.js')

//exporting all the helper functions
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

//Finds steps linked to the scheme via a forien key in the steps table
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

//Adds a scheme to the db
function add(scheme) {
    return db('schemes').insert(scheme);
}

//Updates a scheme in the dm specified by the id argument
function update(scheme, id) {
    return db('schemes').where({id}).update(scheme);
}

//Removes the scheme with the givin id from the db
function remove (id) {
    return db('schemes').where({id}).del();
}
