const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const workoutSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  workoutDate: {
    type: Date,
    default: new Date(Date.now()),
    required: true,
  },
  weight: {
    type: Number,
    min: 10,
    max: 999,
    required: true,

  },
  sets: {
    type: Number,
    min: 1,
    max: 10,
    required: true,
  },
  reps: {
    type: Number,
    min: 1,
    max: 20,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  comments: [commentSchema],
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);