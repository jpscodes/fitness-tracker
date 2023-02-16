const Workout = require('../models/workout');
const ensureLoggedIn = require('../config/ensureLoggedIn');

module.exports = {
  index,
  create,
  new: newWorkout,
  show,
  edit,
  update,
  myindex
};

function index(req, res) {

  Workout.find({}).sort('-workoutDate').exec(function (err, workouts) {
    res.render('workouts/index', { title: 'All Workouts', workouts });
  });
};

function create(req, res) {
  console.log('new workout', req.body)
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const workout = new Workout(req.body);
  workout.save(function (err) {
    if (err) return res.redirect('/workouts/new');
    res.redirect('/workouts');
  });
};

function newWorkout(req, res) {
  res.render('workouts/new', { title: 'New Workout' });
};

function show(req, res) {
  Workout.findById(req.params.id, function (err, workout) {
    res.render('workouts/show', {
      title: 'Details',
      workout
    })
  })
};

function edit(req, res) {
  Workout.findById(req.params.id, function (err, workout) {
    let d = workout.workoutDate;
    let datestring = d.getFullYear().toString().padStart(4, '0') + '-' + (d.getMonth() + 1).toString().padStart(2, '0') + '-' + d.getDate().toString().padStart(2, '0');
    console.log(workout.workoutDate)
    res.render('workouts/edit', { title: 'edit', workout, datestring })
  });
};

function update(req, res) {
  console.log('line 51', req.body)
  Workout.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    // update object with updated properties
    req.body,
    // options object with new: true to make sure updated doc is returned
    { new: true },
    function (err, workout) {
      if (err || !workout) return res.redirect('/workouts');
      res.redirect(`/workouts/${workout._id}`);
    }
  );
};

function myindex(req, res) {
  Workout.find({ user: req.user._id }, function (err, workouts) {
    res.render('workouts/index', { title: 'My Workouts', workouts });
  });
};