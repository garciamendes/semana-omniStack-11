const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

// route da criação das ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// route da criação dos Profiles
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

// route de DELETAR
routes.delete('/incidents/:id', IncidentController.delete);

// routes do ProfileControllers
routes.get('/profile', ProfileController.index);




module.exports = routes;
