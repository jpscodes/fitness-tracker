const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteComment
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

function deleteComment(req, res) {
  Workout.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}).then(function(workout) {
    // Rogue user!
    if (!workout) return res.redirect('/workouts');
    // Remove the review using the remove method available on Mongoose arrays
    workout.comments.remove(req.params.id);
    // Save the updated workout
    workout.save().then(function() {
      // Redirect back to the workout's show view
      res.redirect(`/workouts/${workout._id}`);
    }).catch(function(err) {
      // Let Express display an error
      return next(err);
      // res.redirect(`/workouts/${workout._id}`);
    });
  });
};