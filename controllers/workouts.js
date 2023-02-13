const Workout = require('../models/workout');

module.exports = {
    index,
    create,
    new: newWork,
};

function index(req, res) {
  console.log(`worouts controller recevied ${req}`);
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts' });
  });
};

function create(req, res) {
  // res.redirect('/workouts/new');
};

function newWork(req, res) {
  res.render('./workouts/new', { title: 'New Workout' });
};