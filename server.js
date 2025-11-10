// cse341/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
require('./db');

const routes = require('./routes');
const contactRoutes = require('./routes/contactRoute');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

// main route (optional)
app.use('/', routes);

// contacts route
app.use('/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
