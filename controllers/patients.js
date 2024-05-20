const Patient = require('../models/patient')

module.exports = {
    new: newPatient,
    create,
    index,
    show,
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

async function show(req, res) {
    try {
        const patient = await Patient.findById(req.params.id)
        res.render('patients/show', {
            title: "Patient Details", patient
        })
    } catch (err) {
        console.log(err);
        res.render("patients/new", { errorMsg: err.message });
    }
}

