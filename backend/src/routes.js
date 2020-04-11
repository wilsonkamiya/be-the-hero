const express = require('express');
const routes = express.Router();

const {celebrate, Segments, Joi} = require('celebrate');

/*importando controllers para a rota*/
const OngController      = require('./controllers/OngController'); 
const IncidentController = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController'); 
const SessionController  = require('./controllers/SessionController');

     /************ONGS**************/   
    //rota para listar ongs
    routes.get('/ongs',OngController.index); 

    // rota para insert de ong
    routes.post('/ongs',celebrate({
          /*query params, route params body params*/
          [Segments.BODY]:Joi.object().keys({
               name:Joi.string().required(),
               email:Joi.string().required().email(),
               whatsapp: Joi.string().required().min(10).max(11),
               city: Joi.string().required(),
               uf: Joi.string().required().length(2)
          })
    }),OngController.create);

    /*************INCIDENTS**********/
    //rota para listar Incidents
    routes.get('/incidents',celebrate({
         [Segments.QUERY]: Joi.number(),
    }),IncidentController.index); 


    // rota para insert de Incidents
    routes.post('/incidents',IncidentController.create);

    // rota para deletar Incidents
    routes.delete('/incidents/:id',celebrate({
         [Segments.BODY]: Joi.object().keys({
               id: Joi.number().required(),
         })   
         }),IncidentController.delete);

    /*****PROFILE*****/
    routes.get('/profile',celebrate({
          [Segments.PARAMS]: Joi.object({
                                         authorization: Joi.string().required(),
                                   }).unknown(),
    }),ProfileController.index);
    

    /*****SESSAO******/
    routes.post('/session',SessionController.create);


    module.exports = routes;