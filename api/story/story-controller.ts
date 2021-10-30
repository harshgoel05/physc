import { Router, Request, Response } from 'express';
import { validateRequest } from '../util/validate-request';
import { SERVER_ERROR } from '../util/errors';
import {
  createstory,
  createComment,
  getStoryByUser,
  getStoryById,
  increaseVotes,
  getAllStories,
} from './story-service';
import { authenticate } from '../auth/auth';
import {
  storyCommentSchema,
  storyRequestParamsSchema,
  storySchema,
  findStoryIdParamsSchema,
} from './story-model';

async function handleCreateStory(req: Request, res: Response) {
  try {
    const { email } = res.locals.user;
    const story = req.body;
    await createstory(story, email);
    res.status(201).send();
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

async function handleGetAllStoriesByUser(req: Request, res: Response) {
  try {
    const { email } = res.locals.user;
    let stories = await getStoryByUser(email);
    res.status(200).send(stories);
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}
async function handleGetAllStories(req: Request, res: Response) {
  try {
    let stories = await getAllStories();
    res.status(200).send(stories);
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}
async function handleGetStoryDetailsById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    let story = await getStoryById(id);
    res.status(200).send(story);
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

async function handleCreateComment(req: Request, res: Response) {
  try {
    const { user } = res.locals;
    const comment = req.body;
    const id = req.params.id;
    await createComment(user, comment, id);
    res.status(201).send();
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}
async function handleincreaseVotes(req: Request, res: Response) {
  try {
    const { user } = res.locals;
    const id = req.params.id;
    const type = req.params.type;
    await increaseVotes(type, id);
    res.status(200).send();
  } catch (err) {
    if (err.code) {
      return res.status(err.code).json(err.message);
    }
    return res.status(500).json(SERVER_ERROR);
  }
}

export default function storyController() {
  const router = Router();
  router.post(
    '/new',
    authenticate(),
    validateRequest('body', storySchema),
    handleCreateStory
  );
  router.get('/', handleGetAllStories);
  router.post(
    '/:id/comment',
    authenticate(),
    validateRequest('params', findStoryIdParamsSchema),
    validateRequest('body', storyCommentSchema),
    handleCreateComment
  );
  router.get('/find/user/all', authenticate(), handleGetAllStoriesByUser);
  router.get(
    '/find/id/:id',
    authenticate(),
    validateRequest('params', findStoryIdParamsSchema),
    handleGetStoryDetailsById
  );
  router.put(
    '/:type/:id',
    authenticate(),
    validateRequest('params', storyRequestParamsSchema),
    handleincreaseVotes
  );

  return router;
}
