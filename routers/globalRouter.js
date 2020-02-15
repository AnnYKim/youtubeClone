import express from "express";
const globalRouter = express.Router();

globalRouter.get("/", (req, res) => {
  res.send("작업 중~~")
})

export default globalRouter;