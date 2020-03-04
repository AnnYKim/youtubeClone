// models의 이름은 대문자로 시작해야 함!

import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  fileUrl: { //실제 비디오를 넣는 게 아닌 주소를 넣을 것!
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now //왜 Date.now()가 아니지? => Date.now()는 즉시실행 함수이기 때문. 모델이 생성됐을 "때만" 딱 한 번 실행되어야 하기 때문에 이렇게 작성. 그럼 몽구스가 ()를 추가해서 실행시켜준다^_^
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment" //모든 Comment ID를 Array로 저장
  }]
});

const model = mongoose.model("Video", videoSchema);

export default model;