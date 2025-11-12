// routes/contactRoute.js
const express = require('express');
const router = express.Router();
const contactsControllers = require('../controllers/contactsControllers');
const contact = require('../models/contact-model');

//swagger documentation

/**
 * @swagger
 * /:
 *   get:
 *     description: Get all contacts
 */
// GET all contacts
router.get('/', contactsControllers.getAll);
//Get single contact by ID
router.get('/:id', contactsControllers.getSingle); 
// Create a new contact
router.post('/', contactsControllers.createContact);
// Update a contact
router.put('/:id', contactsControllers.updateContact);  
// Delete a contact
router.delete('/:id', contactsControllers.deleteContact);

module.exports = router;
