const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', (lesson1Controller.helloRoute))
routes.get('/hello', (lesson1Controller.helloWorldRoute));

module.exports = routes;