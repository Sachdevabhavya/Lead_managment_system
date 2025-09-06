const express = require('express');
const leadRouter = express.Router()
const Lead = require('../controllers/leadController')
const { auth_middleware } = require('../middleware/auth');

leadRouter.post('/leads', auth_middleware, Lead.createLead);
leadRouter.get('/leads', auth_middleware, Lead.getLeads);
leadRouter.get('/leads/:id', auth_middleware, Lead.getLeadById);
leadRouter.put('/leads/:id', auth_middleware, Lead.updateLead);
leadRouter.delete('/leads/:id', auth_middleware, Lead.deleteLead);

module.exports = leadRouter;