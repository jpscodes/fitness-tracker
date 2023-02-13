const Workout = require('../models/workout');

module.exports = {
    index,
};

function index(req, res) {
  console.log(`worouts controller recevied ${req}`);
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts' });
  });
};