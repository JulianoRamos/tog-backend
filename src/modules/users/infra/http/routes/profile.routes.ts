import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      user_id: Joi.string().uuid().required(),
    },
  }),
  profileController.show,
);

export default profileRouter;
