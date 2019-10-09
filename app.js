// express 도입
import express from "express";

// 미들웨어 도입
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import {
  localsMiddleware
}
from "./middlewares";
import morgan from "morgan";

// routes 도입
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";

const app = express();

//헬멧 & 
app.use(helmet());

//view engine 변경
app.set('view engine', 'pug');


app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(localsMiddleware);


app.use(routes.home, globalRouter)
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;