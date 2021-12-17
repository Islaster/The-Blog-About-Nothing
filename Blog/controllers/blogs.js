module.exports = {
  index,
  new: newBlog,
};

function index(req, res) {
  res.render("blogs/index", { title: "All Blogs", style: "style.css" });
}

function newBlog(req, res) {
  res.render("blogs/new", { title: "Create Blog", style: "style.css" });
}
