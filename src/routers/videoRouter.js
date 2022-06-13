import express from "express";
import {
  watch,
  editVideo,
  deleteVideo,
  upload,
} from "../controllers/videoConroller";

const videoRouter = express.Router();

videoRouter.get("/:id", watch);
videoRouter.get("/:id/edit", editVideo);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
