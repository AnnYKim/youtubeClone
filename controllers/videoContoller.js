import routes from "../routes";
import Video from "../models/Video"; //element를 받는 통로일 뿐, element 자체는 아님!

export const home = async (req, res) => {
  // 자바스크립트에게 '비디오를 찾을 때까지 기다려!'라고 명령할 때 async를 쓴다. 그러니까 이게 없으면 '알았어, 비디오 찾고 있어. 그러면서 다음 일 진행할게. 렌더링 고고~'하는 바람에 비디오 없는 화면을 렌더링해버린다. 이걸 막기 위해 async를 거는 것.
  try {
    const videos = await Video.find({}).sort({
      _id: -1 //아이디가 새로운 순으로 정렬
    });
    // throw Error("에러테스트");
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


export const videosDetail = async (req, res) => {
  console.log(req.params);
  const {
    params: {
      id
    }
  } = req;
  try {
    const video = await Video.findById(id);
    console.log(video);
    res.render("videosDetail", {
      pageTitle: video.title,
      video: video
    })
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
}

export const getUpload = (req, res) => {
  res.render("videosUpload", {
    pageTitle: "Upload your video"
  })
}

export const postUpload = async (req, res) => {
  const {
    body: {
      videoTitle,
      videoDesc
    },
    file: {
      path
    }
  } = req;

  const newVideo = await Video.create({
    fileUrl: path,
    title: videoTitle,
    description: videoDesc
  })
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
}


export const getEditVideo = async (req, res) => {
  const {
    params: {
      id
    }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videosEdit", {
      pageTitle: "Edit Your Video",
      video
    });

  } catch (error) {
    res.redirect(routes.home);
  }


}

export const postEditVideo = async (req, res) => {
  const {
    params: {
      id
    },
    body: {
      title,
      description
    }
  } = req;

  try {
    await Video.findOneAndUpdate({
      _id: id
    }, {
      title,
      description
    });
    //title:videoTitle보다 깔끔하고 보기 좋기 때문에 이름을 통일시키는 것이 좋다
    console.log(title, description);
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }

}

export const deleteVideo = async (req, res) => {
  const {
    params: {
      id
    }
  } = req;
  try {
    await Video.findOneAndRemove({
      _id: id
    });
  } catch (error) {}
  res.redirect(routes.home);
};