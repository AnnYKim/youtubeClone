import routes from "../routes";
import Video from "../models/Video"; //element를 받는 통로일 뿐, element 자체는 아님!

export const home = async (req, res) => {
  // 자바스크립트에게 '비디오를 찾을 때까지 기다려!'라고 명령할 때 async를 쓴다. 그러니까 이게 없으면 '알았어, 비디오 찾고 있어. 그러면서 다음 일 진행할게. 렌더링 고고~'하는 바람에 비디오 없는 화면을 렌더링해버린다. 이걸 막기 위해 async를 거는 것.
  try {
    const videos = await Video.find({});
    throw Error("에러테스트");
    res.render("home", {
      pageTitle: "Main",
      videos
    });
  } catch (error) { //성공적으로 작업이 완료된 후가 아닌, 뭐가 됐든 작업이 완료된 후 실행되므로 에러의 경우를 대비해 try catch 를 써준다.
    console.log(error);
    res.render("home", {
      pageTitle: "Main",
      videos: []
    });
  }
};

export const search = (req, res) => {
  const {
    query: {
      term: searchTerm
    }
  } = req;
  res.render("search", {
    pageTitle: "Search",
    searchTerm,
    videos
  });
};


export const videosDetail = (req, res) => {
  res.render("videosDetail", {
    pageTitle: "비디오 디테일"
  })
}

export const getUpload = (req, res) => {
  res.render("videosUpload", {
    pageTitle: "Upload your video"
  })
}

export const postUpload = (req, res) => {
  const {
    body: {
      videoFile,
      videoTitle,
      videoDesc
    }
  } = req;
  res.redirect(routes.home)
}


export const videosEdit = (req, res) => {
  res.render("videosEdit");
}