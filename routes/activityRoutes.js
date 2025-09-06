const express = require('express');
const activityRouter = express.Router()
const Activity = require('../controllers/activityController')
const { auth_middleware } = require('../middleware/auth');

activityRouter.post('/activities', auth_middleware, Activity.addActivity);
activityRouter.get('/activities/lead/:leadId', auth_middleware, Activity.getActivitiesByLead);

module.exports = activityRouter;