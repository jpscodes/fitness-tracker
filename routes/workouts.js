var express = require('express');
var router = express.Router();
var workoutsCtrl = require('../controllers/workouts');

router.get('/', workoutsCtrl.index);

module.exports = router;
