import { Router } from 'express';
import UserController from '@modules/users/controllers/UserController';

const routes = Router();

routes.get('/users', UserController.index);
routes.get('/users/:slug', UserController.get);

export default routes;
