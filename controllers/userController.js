import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", {
    pageTitle: "Join"
  })
};

export const postJoin = (req, res) => {
  console.log(req.body);
  // const userName = req.body.userName;
  // const { body: {} } = req;
  const {
    body: {
      userName,
      email,
      password,
      password2
    }
  } = req;
  if (password !== password2) {
    console.log("또잉?");
    res.status(400)
  } else {
    console.log("회원가입 성공!");
    res.redirect(routes.home)
  }
}

export const getLogin = (req, res) => {
  res.render("login", {
    pageTitle: "Login"
  })
};

export const postLogin = (req, res) => {
  console.log("로그인 성공!");
  res.redirect(routes.home);
}

export const editProfile = (req, res) => {
  res.render("editProfile", {
    pageTitle: "Edit Your Profile"
  })
};

export const userDetail = (req, res) => {
  res.render("userDetail", {
    pageTitle: "User Details"
  })
}

export const changePassword = (req, res) => {
  res.render("changePassword", {
    pageTitle: "Change Your Password"
  });
}

export const logout = (req, res) => {
  //TODO: 로그아웃 기능 구현
  res.redirect(routes.home);
}