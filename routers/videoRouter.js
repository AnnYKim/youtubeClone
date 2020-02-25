import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videosDetail,
  videosEdit
} from "../controllers/videoContoller"
const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.editVideo, videosEdit);
videoRouter.get(routes.videoDetail(), videosDetail);

export default videoRouter;