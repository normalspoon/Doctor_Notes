const Movie = require('../models/patient')

module.exports = {
    new: newPatient,
    create,
    index,
};


function newPatient(req, res) {
    res.render('patients/new', {title: 'Add New Patient'});
}

async function create(req, res) {
    try {
        await patient.create(req.body);
        res.redirect('/patients/new')
    } catch (err) {
        console.log(err);
        res.render('movies/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const patients = await Movie.find({})
    res.render('patients/index', {title: 'All Patients', patients})
}