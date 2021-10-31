import express from 'express';
import cors from 'cors';
import path from 'path';
import rateLimit from 'express-rate-limit';
import { config } from 'dotenv';
import { initDbClient } from './api/util/database';
import { TOO_MANY_REQUESTS_ERROR } from './api/util/errors';
import { Request, Response, NextFunction } from 'express';
import testController from './api/test/test-controller';
import { handleError } from './api/util/error-handler';
import usersController from './api/users/users-contoller';
import storyController from './api/story/story-controller';
async function createServer() {
  /*---------------------------------------------------------
                    Init Middlewares
  ----------------------------------------------------------*/
  config();
  await initDbClient();
  const app = express();
  // Append required middlewares
  app.use(cors());
  app.use(express.json());
  app.use(
    rateLimit({
      max: Number(process.env.RATE_LIMIT_MAX || 600),
      handler: (req: Request, res: Response) => {
        res.status(429).json(TOO_MANY_REQUESTS_ERROR);
      },
    })
  );
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(new Date(), '       ', req.url);
    next();
  });
  /*---------------------------------------------------------
                   Serve React App
  ----------------------------------------------------------*/

  app.use(express.static(path.join(__dirname, 'client')));
  app.use((req: Request, res: Response, next: NextFunction) => {
    if (!req.url.startsWith('/api')) {
      res.sendFile(path.join(__dirname, 'client', 'index.html'));
    } else {
      next();
    }
  });

  app.use('/api/test', testController());
  app.use('/api/users', usersController());
  app.use('/api/story', storyController());

  app.use((req: Request, res: Response) => {
    res.status(404).json({
      error: 'not_found',
      error_description: `Cannot ${req.method} ${req.url}`,
    });
  });

  /*---------------------------------------------------------
                   Error handler
  ----------------------------------------------------------*/

  app.use((err, req: Request, res: Response, _next: NextFunction) => {
    handleError(err, res);
  });

  // Deployment handler

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  /*---------------------------------------------------------
                   Start server
  ----------------------------------------------------------*/
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port', process.env.PORT || 3000);
  });
}

createServer();
