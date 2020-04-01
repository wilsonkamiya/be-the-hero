const express = require('express');
const routes = express.Router();

/*importando controllers para a rota*/
const OngController      = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController'); 
const SessionController  = require('./controllers/SessionController');

     /************ONGS**************/   
    //rota para listar ongs
    routes.get('/ongs',OngController.index); 
    // rota para insert de ong
    routes.post('/ongs',OngController.create);
    

    /*************INCIDENTS**********/
    //rota para listar Incidents
    routes.get('/incidents',IncidentController.index); 
    // rota para insert de Incidents
    routes.post('/incidents',IncidentController.create);
    // rota para deletar Incidents
    routes.delete('/incidents/:id',IncidentController.delete);

    /*****PROFILE*****/
    routes.get('/profile',ProfileController.index);
    

    /*****SESSAO******/
    routes.post('/session',SessionController.create);


    module.exports = routes;