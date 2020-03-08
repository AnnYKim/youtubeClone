// express 도입
import express from "express";

// 미들웨어 도입
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import passport from "passport";
import morgan from "morgan";
import {
  localsMiddleware
} from "./middlewares";

// routes 도입
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

import "./passport";

const app = express();

app.use(helmet());

app.set('view engine', 'pug');
app.use("/uploads", express.static("uploads")) //영 좋지 않은 방식이라고 하는데.. 아직 이해가 안 됨ㅋㅋㅋㅋㅋ
app.use("/static", express.static("static"));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);


export default app;