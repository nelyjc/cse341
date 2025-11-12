const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};
const createContact = async (req, res) => {
    //#swagger.tags = ['Contacts']
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb
    .getDatabase()
    .db()
    .collection('contacts')
    .insertOne(contact);

    if (response.acknowledged) {
        res.status(201).json({
        message: 'Contact created successfully',
        id: response.insertedId
});
    } else {
        res.status(500).json({ message: 'Failed to create contact' });
    }
};

const updateContact = async (req, res) => {
    //#swagger.tags = ['Contacts']
  try {
    const contactId = new ObjectId(req.params.id);

    const contact = {
      username: req.body.username,
      email: req.body.email,
      name: req.body.name,
      ipaddress: req.body.ipaddress,
    };

    const response = await mongodb
      .getDatabase()
      .db()
      .collection('contacts')
      .updateOne({ _id: contactId }, { $set: contact }); // ✅ fixed
 if (response.modifiedCount > 0) {
      res.status(200).json({
        message: `✅ Successfully updated contact with ID: ${contactId}`,
        updatedContact: contact,
      });
    } else {
      res.status(404).json({
        message: `⚠️ No changes made.`,
      });
    }
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ message: '❌ Error updating contact', error });
  }
};


const deleteContact = async (req, res) => {
    //#swagger.tags = ['Contacts']
  try {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDatabase()
      .db()
      .collection('contacts')
      .deleteOne({ _id: contactId });

    if (response.deletedCount > 0) {
      res.status(200).json({
        message: `🗑️ Successfully deleted contact with ID: ${contactId}`,
      });
    } else {
      res.status(404).json({
        message: `⚠️ No contact found with ID: ${contactId}`,
      });
    }
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      message: '❌ Error deleting contact',
      error: error.message,
    });
  }
};

module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};
