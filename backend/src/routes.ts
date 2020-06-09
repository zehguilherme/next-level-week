import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router(); //desaclopar as rotas para este arquivo separado
const upload = multer(multerConfig); //upload de umagens

/***************************************************************** Item ******************************************************************/

routes.get('/items', itemsController.index); // Listar todos os itens

/***************************************************************** Ponto de coleta *******************************************************/

// Criação de um ponto de coleta
routes.post(
  '/points',
  upload.single('image'),
  celebrate(
    {
      body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required(),
      }),
    },
    {
      abortEarly: false, //retorna todos as mensagens de erros e seus campos de uma vez
    }
  ),
  pointsController.create
);

routes.get('/points/', pointsController.index); //Listar pontos de coleta (filtro por estado/cidade/itens)

routes.get('/points/:id', pointsController.show); //Listar um ponto de coleta específico

export default routes;
