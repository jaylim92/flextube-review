import express from "express";
import {
  editUser,
  logout,
  userDelete,
  see,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", see);
userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/userDelete", userDelete);

export default userRouter;
