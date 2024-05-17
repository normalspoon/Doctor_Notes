const Patient = require('../models/patient')

module.exports = {
    new: newPatient,
    create,
    index,
};


function newPatient(req, res) {
    res.render('patients/new', {title: 'Add New Patient'});
}

async function create(req, res) {
    console.log("create function test", JSON.stringify(req.body));
    try {
        await Patient.create(req.body);
        res.redirect('/patients')
    } catch (err) {
        console.log(err);
        res.render('patients/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const patients = await Patient.find({})
    res.render('patients/index', {title: 'All Patients', patients})
}