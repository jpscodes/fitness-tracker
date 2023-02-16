const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', workoutsCtrl.index);
router.get('/user', workoutsCtrl.myindex);
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
router.post('/', ensureLoggedIn, workoutsCtrl.create);
router.get('/:id', ensureLoggedIn, workoutsCtrl.show);
router.get('/:id/edit', ensureLoggedIn, workoutsCtrl.edit);
router.put('/:id', ensureLoggedIn, workoutsCtrl.update);



module.exports = router;
