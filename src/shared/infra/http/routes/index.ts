import { Router } from 'express';

import UsersRouter from '@modules/users/infra/http/routes/users.routes';
import ProfileRouter from '@modules/users/infra/http/routes/profile.routes';

const routes = Router();

routes.use('/users', UsersRouter);
routes.use('/profile', ProfileRouter);

export default routes;
