// cse341/routes/index.js
const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalController');

// Root route
router.get('/', (req, res) => {
  res.send('Welcome to the Professional API!');
});

// Professional route
router.get('/professional', professionalController.getData);

module.exports = router;
