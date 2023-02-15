const workout = require("../models/workout");

const Workout = require('../models/workout');

module.exports = {
    create
};

function create() {
  Movie.findById(req.params.id, function(err, movie) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    workout.comments.push(req.body);
    workout.save(function(err) {
      res.redirect(`/workouts/${workout._id}`);
    });
  });
};