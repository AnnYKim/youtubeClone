import routes from "../routes";
import User from "../models/User";

export const getJoin = (req, res) => {
  res.render("join", {
    pageTitle: "Join"
  })
};

export const postJoin = async (req, res) => {
  console.log(req.body);
  const {
    body: {
      name,
      email,
      password,
      password2
    }
  } = req;
  if (password !== password2) {
    console.log("또잉?");
    res.status(400)
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      console.log("회원가입 성공!");
    } catch (error) {
      console.log(error);
    }
  }
  res.redirect(routes.home)
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