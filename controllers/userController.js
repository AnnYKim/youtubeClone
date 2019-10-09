export const join = (req, res) => res.render("join", {
  pageTitle: "Join"
});
export const login = (req, res) => res.render("login")
export const logout = (req, res) => {
  res.send("로그아웃 화면!")
};