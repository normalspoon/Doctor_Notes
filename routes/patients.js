var express = require('express');
var router = express.Router();
const patientsCtrl = require('../controllers/patients');
const notesCtrl = require('../controllers/notes');

//GET /patients
router.get('/', patientsCtrl.index);
//GET /patients/ new
router.get('/new', patientsCtrl.new);
//POST /patients
router.post('/', patientsCtrl.create)
//GET/patients/:id
router.get('/:id', patientsCtrl.show);
//GET /patients/:id/notes/new
router.get('/:id/notes/new', notesCtrl.new);
//POST /patients/:id/notes
router.post('/:id/notes', notesCtrl.create);
module.exports = router; 

