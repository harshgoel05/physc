import { Router, Request, Response } from 'express';
import { authenticate } from '../auth/auth';
import { SERVER_ERROR } from '../util/errors';
async function handleCheck(req: Request, res: Response) {
  try {
    res.status(200).send({ message: 'It works!' });
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

export default function testController() {
  const router = Router();
  router.get('/check', authenticate(), handleCheck);
  return router;
}
