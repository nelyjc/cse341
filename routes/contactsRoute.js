// routes/contactRoute.js
const express = require('express');
const router = express.Router();
const contact = require('../models/contact-model');

const contactControllers = require('../controllers/contactsControllers');

// GET all contacts
router.get('/', contactControllers.getAll);

//Get single contact by ID
router.get('/:id', contactControllers.getSingle); 

module.exports = router;
