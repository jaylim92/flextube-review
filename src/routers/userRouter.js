import express from "express";
import {
  editUser,
  logout,
  userDelete,
  see,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", see);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/userDelete", userDelete);

export default userRouter;
