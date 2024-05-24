const Patient = require('../models/patient');
module.exports = {
    new: newNote,
    create,
    show,
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

async function show(req, res) {
    try {
        const patient = await Patient.findById(req.params.id)
        const noteId = req.params.noteId
        const note = patient.notes.find((note)=> note.id === noteId)
        console.log(note)
        res.render('patients/notes/show', {
            title: "Patient Details", note, patient
        })
    } catch (err) {
        console.log(err);
        res.render("patients/new", { errorMsg: err.message });
    }
}
