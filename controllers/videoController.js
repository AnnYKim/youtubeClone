export const home = (req, res) => res.render("home", {
  pageTitle: "Home"
});
export const search = (req, res) => res.send("검색 화면!");