const Patient = require('../models/patient');
const Note = require('../models/note');  
module.exports = {
    new: newNote,
    create,
}

async function newNote (req, res) {
    const patient = await Patient.findById(req.params.id);
    res.render('patients/notes/new', {title: 'Add Note', patient });
}

async function create(req, res) {
    const patient = await Patient.findById(req.params.id);
    const note = new Note({...req.body, patient: patient._id});
    await note.save();
    res.redirect(`/patients/${patient._id}`);
//     patient.notes.push(req.body);
//     try {
//         await patient.save();
//     } catch (err) {
//         console.log(err);
//     }
//     res.redirect((`/patients/${movie._id}`))
}
