var express = require('express');
var router = express.Router();
const patientsCtrl = require('../controllers/patients');
const notesRouter = require('./notes'); //add this to help separate nested notes router
const ensureLoggedIn = require('../config/ensureLoggedIn');


//GET /patients
router.get('/', ensureLoggedIn, patientsCtrl.index);
//GET /patients/ new
router.get('/new', ensureLoggedIn, patientsCtrl.new);
//POST /patients
router.post('/', ensureLoggedIn, patientsCtrl.create)
//GET/patients/:id
router.get('/:id', ensureLoggedIn, patientsCtrl.show);
//GET Post: POSTS/:id/ 
router.get("/edit/:id", ensureLoggedIn, patientsCtrl.edit)
// UPDATE Post: POSTS/:id/
router.put("/:id", ensureLoggedIn,patientsCtrl.update)
// DELETE /patients/:id/notes/:id
router.delete('/:id', ensureLoggedIn, patientsCtrl.delete);
//below is method for separating nested routes


router.use('/:id/notes', notesRouter) 
module.exports = router;

