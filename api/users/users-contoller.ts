import { Router, Request, Response } from 'express';
import { validateRequest } from '../util/validate-request';
import { SERVER_ERROR } from '../util/errors';
import { getUser, loginUser, signupUser } from './users-service';
import { loginBodySchema, userSchema } from './users-model';
import { authenticate } from '../auth/auth';

/*---------------------------------------------------------
                   Login User
  --------------------------------------------------------*/

async function handleLoginUser(req: Request, res: Response) {
  try {
    const user = await loginUser(req.body);
    res.status(200).send(user);
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

/*---------------------------------------------------------
                   Signup User
  --------------------------------------------------------*/

async function handleSignupUser(req: Request, res: Response) {
  try {
    const userData = req.body;
    await signupUser(userData);
    res.status(200).send();
  } catch (err) {
    console.log(err);
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

/*---------------------------------------------------------
                   Get User Details
  --------------------------------------------------------*/

async function handleGetUser(req: Request, res: Response) {
  try {
    const { email } = res.locals.user;
    const user = await getUser(email);
    res.status(200).send(user);
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

/*---------------------------------------------------------
  ---------------------------------------------------------
                   Controller
  ---------------------------------------------------------
  --------------------------------------------------------*/

export default function usersController() {
  const router = Router();
  router.post(
    '/login',
    validateRequest('body', loginBodySchema),
    handleLoginUser
  );
  router.post('/create', validateRequest('body', userSchema), handleSignupUser);
  router.get('/', authenticate(), handleGetUser);
  return router;
}
