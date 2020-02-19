export const join = (req, res) => {
  res.render("join", {
    pageTitle: "Join"
  })
};

export const login = (req, res) => {
  res.render("login", {
    pageTitle: "Login"
  })
};

export const editProfile = (req, res) => {
  res.render("editProfile", {
    pageTitle: "Edit Your Profile"
  })
};

export const changePassword = (req, res) => {
  res.render("changePassword", {
    pageTitle: "Change Your Password"
  });
}

export const logout = (req, res) => res.send("로그아웃 화면!");