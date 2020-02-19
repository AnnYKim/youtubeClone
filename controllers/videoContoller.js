export const home = (req, res) => {
  res.render("home", {
    pageTitle: "Main"
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
    searchTerm
  });
};