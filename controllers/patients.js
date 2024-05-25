const Patient = require('../models/patient')
const mongoose = require('mongoose')

module.exports = {
    new: newPatient,
    create,
    index,
    show,
    edit,
    update,
    delete: deletePatient,
};

async function deletePatient(req, res) {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.redirect('/patients');
    try {
        await Patient.deleteOne({ _id: patient._id });
        res.redirect('/patients');
    } catch (err) {
        console.log(err);
        res.redirect('/patients');
    }
}

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
    const patients = await Patient.find({}).sort({surname: 1});
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

 async function edit(req,res) {
    const patient =  await Patient.findById(req.params.id)
    res.render('patients/edit', {
        title: 'Edit Patient Details', patient
    })
}

async function update(req, res) {
    const filter =  { _id: new mongoose.Types.ObjectId(req.params.id) };    
    const updateDoc = {
        $set:  req.body
      };
    const patient =  await Patient.updateOne(filter, updateDoc)
    console.log("update function test", JSON.stringify(req.body));

    res.redirect(`/patients/${req.params.id}`);
}

