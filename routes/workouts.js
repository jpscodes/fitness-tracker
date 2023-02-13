const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

router.get('/', workoutsCtrl.index);

module.exports = router;
