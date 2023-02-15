const Workout = require('../models/workout');

module.exports = {
    create
};

function create(req, res) {
    console.log(req)
  Workout.findById(req.params.id, function(err, workout) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body);
    workout.comments.push(req.body);
    workout.save(function(err) {
      res.redirect(`/workouts/${workout._id}`);
    });
  });
};