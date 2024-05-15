const Movie = require('../models/patient')

module.exports = {
    new: newPatient,
    // create,
    index,
};


function newPatient(req, res) {
    res.render('patients/new', {title: 'Add New Patient'});
}

// async function create(req, res) {

//     res.render('patients/new', {title: 'Add New Patient'} )
//     res.redirect()
// }

async function index(req, res) {
    const patients = await Movie.find({})
    res.render('patients/index', {title: 'All Patients', patients})
}