import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  getDelete,
} from "../controllers/videoConroller";

const videoRouter = express.Router();

videoRouter.get("/:id([a-z0-9]{24})", watch);
videoRouter.route("/:id([a-z0-9]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([a-z0-9]{24})/Delete").get(getDelete);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
