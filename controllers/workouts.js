const Workout = require('../models/workout');

module.exports = {
    index,
    create,
    new: newWorkout,
};

function index(req, res) {
  
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts', workouts });
  });
};

function create(req, res) {
  console.log('create', req.body)
  const workout = new Workout(req.body);
  workout.save(function(err) {
    if (err) return res.redirect('/workouts/new');
    console.log(workout);
    res.redirect('/workouts');
  });
};

function newWorkout(req, res) {
  res.render('./workouts/new', { title: 'New Workout' });
};