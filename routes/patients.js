var express = require('express');
var router = express.Router();
const patientsCtrl = require('../controllers/patients');
const notesRouter = require('./notes') //add this to help separate nested notes router

//GET /patients
router.get('/', patientsCtrl.index);
//GET /patients/ new
router.get('/new', patientsCtrl.new);
//POST /patients
router.post('/', patientsCtrl.create)
//GET/patients/:id
router.get('/:id', patientsCtrl.show);
//GET Post: POSTS/:id/ 
router.get("/edit/:id", patientsCtrl.edit)
// UPDATE Post: POSTS/:id/
router.put("/:id", patientsCtrl.update)
//below is method for separating nested routes

router.use('/:id/notes', notesRouter) 
module.exports = router;

