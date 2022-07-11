import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  getDelete,
} from "../controllers/videoConroller";
import { protectorMiddleware } from "../middleware";

const videoRouter = express.Router();

videoRouter.get("/:id([a-z0-9]{24})", watch);
videoRouter
  .route("/:id([a-z0-9]{24})/edit")
  .all(protectorMiddleware)
  .get(getEdit)
  .post(postEdit);
videoRouter
  .route("/:id([a-z0-9]{24})/Delete")
  .all(protectorMiddleware)
  .get(getDelete);
videoRouter
  .route("/upload")
  .all(protectorMiddleware)
  .get(getUpload)
  .post(postUpload);

export default videoRouter;
