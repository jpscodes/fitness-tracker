const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  content: {
    type: String
  },
  workoutDate: {
    type: Date,
    default: new Date(Date.now())
  },
  weight: {
    type: Number,
    min: 10,
    max: 999

  },
  sets: {
    type: Number,
    min: 1,
    max: 10
  },
  reps: {
    type: Number,
    min: 1,
    max: 20
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);