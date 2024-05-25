// const Performer = require('../models/performer');
// const Movie = require('../models/movie');

// module.exports = {
//   new: newPrescription,
//   create,
//   addToCast
// };

// async function addToCast(req, res) {
//   const patient = await Patient.findById(req.params.id);
//   movie.prescription.push(req.body.performerId);
//   await movie.save();
//   res.redirect(`/movies/${movie._id}`);
// }

// async function newPrescription(req, res) {
//   const performers = await Performer.find({}).sort('name');
//   res.render('performers/new', { title: 'Add Performer', performers });
// }

// async function create(req, res) {

//   try {
//     await Performer.create(req.body);
//   } catch (err) {
//     console.log(err);
//   }
//   res.redirect('/performers/new');
// }