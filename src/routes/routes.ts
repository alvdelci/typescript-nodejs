import { Request, Response, Router } from 'express';

import controller from '../controllers/controller';

const routes = Router();

routes.get('/get', controller.index);

export default routes;