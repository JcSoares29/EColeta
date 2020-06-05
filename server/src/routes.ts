import express, { request, response } from 'express';
import knex from './database/connection'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

// index, show, create, update, delete

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create)

routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)

export default routes;