const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', workoutsCtrl.index);
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
router.post('/', ensureLoggedIn, workoutsCtrl.create);
router.get('/:id', ensureLoggedIn, workoutsCtrl.show);


module.exports = router;
