import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Tet is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video" //위의 ObjectId가 어느 model에서 왔는지를 알려준다
  }
})

/*
Video랑 Comment를 연결시키려면, 
1) Comment가 비디오 ID를 저장하고 있거나, (예- 이 코멘트는 ID가 1882인 비디오에 달린 것이다)
2) video가 ID의 array를 갖고 있어야 한다. (예- 이 비디오의 코멘트 리스트의 길이는 2개. 즉, 코멘트가 2개 달렸다.)
*/

const model = mongoose.model("Comment", CommentSchema);

export default model;