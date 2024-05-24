const Patient = require('../models/patient');
const mongoose = require('mongoose')

module.exports = {
    new: newNote,
    create,
    show,
    update,
    delete: deleteNote,
}
async function deleteNote(req, res) {
  const patient = await Patient.findById(req.params.id);
  if (!patient) return res.redirect('/patients');
  // patient.notes = patient.notes.filter(n => n.id !== req.params.noteId);
  patient.notes.remove(req.params.noteId)
  await patient.save();
  res.redirect(`/patients/${req.params.id}`);
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
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  
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
        console.log("show id", JSON.stringify(req.params.id));
        res.render('patients/notes/show', {
            title: "Patient Details", note, patient
        })
    } catch (err) {
        console.log(err);
        res.render("patients/new", { errorMsg: err.message });
    }
}
async function update(req, res) {
  const patient = await Patient.findById(req.params.id)
  console.log(req.params.id)
  console.log(req.params.noteId)
  const notes = patient.notes.map((note)=> note.id === req.params.noteId ? req.body : note)
  const filter =  { _id: new mongoose.Types.ObjectId(req.params.id) };    
  const updateDoc = {
      $set:  {notes: notes}
    };
  await Patient.updateOne(filter, updateDoc)
  console.log("update function test", JSON.stringify(req.body));
  console.log(req.params.noteId)

  res.redirect(`/patients/${req.params.id}`);
}

