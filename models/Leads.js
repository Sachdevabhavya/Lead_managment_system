const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  company: { type: String },
  source: { 
    type: String, 
    enum: ['Website', 'Referral', 'LinkedIn', 'Ads', 'Other'], 
    default: 'Other' 
  },
  status: { 
    type: String, 
    enum: ['New', 'Contacted', 'Follow-Up', 'Qualified', 'Converted', 'Lost'], 
    default: 'New' 
  },
  priority: { 
    type: String, 
    enum: ['Hot', 'Warm', 'Cold'], 
    default: 'Cold' 
  },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notes: [{ 
    text: String, 
    date: { type: Date, default: Date.now } 
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
