const swaggerAutogen = require('swagger-autogen')();

const doc={
    info: {
        title: 'Contacts API',
        description: 'API for managing contacts'
    },
    host: 'localhost:8080',
    schemes: ['https', 'http']
};         

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);