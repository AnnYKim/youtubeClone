import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL, { //어디에 데이터베이스가 있냐!
    useNewUrlParser: true, //config 추가
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
const handleOpen = () => console.log("🐳 DB에 연결됐어요!");
const handleError = () => console.log("❌ 에러가 났어요...");
db.once("open", handleOpen);
db.on("error", handleError);




// export const videos = [{
//     id: 1887,
//     title: 'A Study in Scarlet',
//     description: "I should like to meet him.",
//     views: 28,
//     videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
//     creator: {
//       id: 12345,
//       name: "Nana",
//       email: "nykim@nykim.net",
//     }
//   },
//   {
//     id: 1890,
//     title: 'The Sign of the Four',
//     description: "For me, there still remains the cocaine-bottle.",
//     views: 28,
//     videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
//     creator: {
//       id: 12345,
//       name: "Nana",
//       email: "nykim@nykim.net",
//     }
//   },
//   {
//     id: 1902,
//     title: 'The Hound of the Baskervilles',
//     description: "They say it is the cry of the Hound of the Baskervilles.",
//     views: 28,
//     videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
//     creator: {
//       id: 12345,
//       name: "Nana",
//       email: "nykim@nykim.net",
//     }
//   },
//   {
//     id: 1902,
//     title: 'The Valley of Fear',
//     description: "Dear me, Mr. Holmes. Dear me!",
//     views: 28,
//     videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
//     creator: {
//       id: 12345,
//       name: "Nana",
//       email: "nykim@nykim.net",
//     }
//   }
// ]