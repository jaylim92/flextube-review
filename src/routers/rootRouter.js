import express from "express";
import { home, search } from "../controllers/videoConroller";
import {
  getJoin,
  postJoin,
  postLogin,
  getLogin,
} from "../controllers/userController";
import { publicMiddleware } from "../middleware";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").all(publicMiddleware).get(getJoin).post(postJoin);
rootRouter.route("/login").all(publicMiddleware).get(getLogin).post(postLogin);
rootRouter.get("/search", search);

export default rootRouter;
