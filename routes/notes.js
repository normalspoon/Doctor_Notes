var express = require('express');
var router = express.Router({mergeParams: true});
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');


//EMBEDDED NOTES FUNCTIONALITY BELOW
//GET /patients/:id/notes/new
router.get('/new', ensureLoggedIn, notesCtrl.new);
// UPDATE Post: POSTS/:id/
router.put("/:noteId", ensureLoggedIn, notesCtrl.update)
//POST /patients/:id/notes
router.post('/', ensureLoggedIn, notesCtrl.create);
//GET/patients/:id/notes/:id
router.get('/:noteId', ensureLoggedIn, notesCtrl.show)
// DELETE /patients/:id/notes/:id
router.delete('/:noteId', ensureLoggedIn, notesCtrl.delete);

module.exports = router; 

