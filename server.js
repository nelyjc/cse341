// cse341/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./data/database');
const contactsRoutes = require('./routes/contactsRoute');
require('dotenv').config();
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
  //  res.setHeader('Access-Control-Allow-Origin', '*');
  //  res.setHeader('Access-Control-Allow-Methods', 
  //   'GET, POST, PUT, DELETE');
  //   res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Z-Key');
  //   next();
   
// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API documentation for CSE341 Contacts project',
    },
    servers: [
      {
        url: '/',
        description: 'Server URL',
      },
    ],
  },
  apis: ['./routes/swagger.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
app.use('/', require('./routes'));
app.use('/contacts', contactsRoutes); 

// MongoDB connection
const port = process.env.PORT || 8080;

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
  } else {
    app.listen(port, () => {
      console.log(`🚀 Server and database are running on port ${port}`);
    });
  }
});
