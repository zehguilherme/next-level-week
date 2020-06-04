import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

const routes = express.Router(); //desaclopar as rotas para este arquivo separado

/***************************************************************** Item ******************************************************************/

routes.get('/items', itemsController.index); // Listar todos os itens

/***************************************************************** Ponto de coleta *******************************************************/

routes.post('/points', pointsController.create); // Criação de um ponto de coleta
routes.get('/points/', pointsController.index); //Listar pontos de coleta (filtro por estado/cidade/itens)
routes.get('/points/:id', pointsController.show); //Listar um ponto de coleta específico

export default routes;
