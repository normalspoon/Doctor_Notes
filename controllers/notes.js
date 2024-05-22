const Patient = require('../models/patient');
const Note = require('../models/note');  
module.exports = {
    new: newNote,
    create,
}

async function newNote (req, res) {
    const patient = await Patient.findById(req.params.id);
    console.log(req.params.id)
    console.log(patient)
    res.render('patients/notes/new', {title: 'Add Note', patient });
}

async function create(req, res) {
console.log("create note function test", JSON.stringify(req.body));
  const patient = await Patient.findById(req.params.id)
  patient.notes.push(req.body);
  try {
    await patient.save();
  
  } catch (err) {
    console.log(err)
  }
  res.redirect(`/patients/${patient._id}`)
}
