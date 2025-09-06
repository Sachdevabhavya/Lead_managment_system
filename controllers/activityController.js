const Activity = require('../models/Activity');

// Add activity for a lead
const addActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    const savedActivity = await activity.save();
    res.status(201).json(savedActivity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all activities for a lead
const getActivitiesByLead = async (req, res) => {
  try {
    const activities = await Activity.find({ lead: req.params.leadId })
      .populate('user', 'name email')
      .sort({ date: -1 });

    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addActivity,
  getActivitiesByLead
}
