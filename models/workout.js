const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  content: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);