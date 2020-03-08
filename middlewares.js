import routes from "./routes";
import multer from "multer";

const upload = multer({
  dest: 'uploads/videos/' // 이때 `/upload/videos/`처럼 앞에 /안 붙이도록 조심
})

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "NanaTube";
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  next();
}

export const uploadVideo = upload.single('videoFile'); //single=하나의 파일만 업로드 가능