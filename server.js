// cse341/server.js
const express = require('express');
const mongodb = require('./data/database');

const app = express();

const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./db');

const routes = require('./routes');
const contactRoutes = require('./routes/contactsRoute');


const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// main route (optional)
app.use('/', require('./routes'));

// contacts route
app.use('/contacts', contactRoutes);

//mongodb connection
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
  } else {
    app.listen(port, () => {
  console.log(`🚀 Database is listening on port ${port}`);
  });
    }
});
