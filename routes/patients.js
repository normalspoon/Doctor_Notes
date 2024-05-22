var express = require('express');
var router = express.Router();
const patientsCtrl = require('../controllers/patients');
const notesRouter = require('./notes')

//GET /patients
router.get('/', patientsCtrl.index);
//GET /patients/ new
router.get('/new', patientsCtrl.new);
//POST /patients
router.post('/', patientsCtrl.create)
//GET/patients/:id
router.get('/:id', patientsCtrl.show);

router.use('/:id/notes', notesRouter) 
module.exports = router;

