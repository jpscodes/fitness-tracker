const Workout = require('../models/workout');
const ensureLoggedIn = require('../config/ensureLoggedIn');

module.exports = {
    index,
    create,
    new: newWorkout,
    show
};

function index(req, res) {
  
  Workout.find({}, function(err, workouts) {
    res.render('workouts/index', { title: 'All Workouts', workouts });
  });
};

function create(req, res) {
  console.log('create', req.body)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
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

function show(req, res) {
  Workout.findById(req.params.id)
  res.render('workouts/show', { title: 'Details',
Workout })
};