import express from "express";
import {
  logout,
  userDelete,
  startGithubLogin,
  finishGithubLogin,
  startKakaoLogin,
  finishKakaoLogin,
  getEditUser,
  postEditUser,
} from "../controllers/userController";
import { protectorMiddleware, publicMiddleware } from "../middleware";

const userRouter = express.Router();

userRouter.get("/logout", protectorMiddleware, logout);
userRouter.get("/github/start", publicMiddleware, startGithubLogin);
userRouter.get("/github/finish", publicMiddleware, finishGithubLogin);
userRouter.get("/kakao/start", publicMiddleware, startKakaoLogin);
userRouter.get("/kakao/finish", publicMiddleware, finishKakaoLogin);
userRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(getEditUser)
  .post(postEditUser);
userRouter.get("/userDelete", userDelete);

export default userRouter;
