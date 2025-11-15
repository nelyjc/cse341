// cse341/server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./data/connection'); // Mongoose only
const contactsRoutes = require('./routes/contactsRoute');
const swaggerRoute = require('./routes/swagger');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Create Express app
const app = express();

// Connect to MongoDB first
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

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
        url: 'http://localhost:8080',
        description: 'Server URL',
      },
    ],
  },
  apis: ['./routes/contactsRoute.js'], 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/', swaggerRoute); // Add this line to serve the Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/contacts', contactsRoutes);

// Global error handler for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Caught Exception:', err);
  process.exit(1);
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
