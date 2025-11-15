const Contact = require('../models/contact-model');
const ObjectId = require('mongoose').Types.ObjectId; // for ID validation
const validator = require('../helpers/validate');

// GET all contacts
const getAll = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contacts', error: err.message });
  }
};

// GET single contact by ID
const getSingle = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid contact ID.' });
  }

  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching contact', error: err.message });
  }
};

// CREATE contact
const createContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create contact', error: err.message });
  }
};

// UPDATE contact
const updateContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid contact ID.' });
  }

  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ message: 'Error updating contact', error: err.message });
  }
};

// DELETE contact
const deleteContact = async (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Invalid contact ID.' });
  }

  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found.' });
    }
    res.status(200).json({ message: 'Contact deleted successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting contact', error: err.message });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
