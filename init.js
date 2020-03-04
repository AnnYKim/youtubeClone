import db from "./db"; //DB 연결
import app from "./app";
import "./models/Video"; //TODO: 왜 import model from "./models/Video"; 이 아니지? 댓글 달린 거 보면... 몽구스에게 models의 존재를 알리는 용도라 그런 거지, 진짜 models를 쓰고 싶다면 import models해도 되는 듯???
import "./models/Comment";

const PORT = 4000;
const handleListening = () =>
  console.log(`🎧 Listening on port ${PORT}!`);

app.listen(PORT, handleListening);