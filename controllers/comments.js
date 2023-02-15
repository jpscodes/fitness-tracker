const Workout = require('../models/workout');

module.exports = {
    create
};

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body);
  Workout.findById(req.params.id, function(err, workout) {
      
      workout.comments.push(req.body);
      workout.save(function(err) {
        console.log(err)
      res.redirect(`/workouts/${workout._id}`);
    });
  });
};