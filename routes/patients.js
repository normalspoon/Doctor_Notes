var express = require('express');
var router = express.Router();
const patientsCtrl = require('../controllers/patients');

//GET /patients
router.get('/', patientsCtrl.index);
//GET /patients/ new
router.get('/new', patientsCtrl.new);

POST /patients
router.post('/', patientsCtrl.create)

module.exports = router;
