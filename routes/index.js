// cse341/routes/index.js
const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/contactsControllers');
const professionalController = require('../controllers/professionalController');
router.use('/', require('./swagger')); // Swagger documentation route

// Root route
router.get('/', (req, res) => {
  //#swagger.tags = ['Welcome to the API']
  res.send('Welcome to the API!');
});
router.use('/contacts', require('./contactsRoute'));

// Professional route
router.get('/professional', professionalController.getData);

module.exports = router;
