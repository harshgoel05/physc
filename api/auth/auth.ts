import { Request, Response, NextFunction } from "express";
import { findUserProfile } from "./auth-service";
import { SERVER_ERROR, UNAUTHORIZED_ACCESS } from "../util/errors";
/*---------------------------------------------------------
                   Authentication Middleware
  --------------------------------------------------------*/

export function authenticate() {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const header = req.headers["authorization"];
      if (!header) {
        throw { code: 401, message: UNAUTHORIZED_ACCESS };
      }
      const token = header.split(" ")[1];
      if (!token) {
        throw { code: 401, message: UNAUTHORIZED_ACCESS };
      }
      const user = await findUserProfile(token);
      res.locals.user = user;
      next();
    } catch (err) {
      if (err.code || err.message) {
        return res.status(401).json(err.message);
      }
      return res.status(500).json(SERVER_ERROR);
    }
  };
}
