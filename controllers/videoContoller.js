import {
  videos
} from "../db";

import routes from "../routes";

export const home = (req, res) => {
  res.render("home", {
    pageTitle: "Main",
    videos: videos
  });
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