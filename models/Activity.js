const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { 
    type: String, 
    enum: ['Call', 'Email', 'Meeting', 'Note'], 
    required: true 
  },
  description: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', activitySchema);
