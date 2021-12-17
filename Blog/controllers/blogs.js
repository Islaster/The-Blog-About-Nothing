const Blog = require("../models/blogs");
module.exports = {
  index,
  new: newBlog,
  create,
  show,
};

function index(req, res) {
  Blog.find({}, function (err, blogs) {
    res.render("blogs/index", {
      title: "All Blogs",
      style: "style.css",
      blogs,
    });
  });
}

function newBlog(req, res) {
  res.render("blogs/new", { title: "Create Blog", style: "style.css" });
}

function create(req, res) {
  const blog = new Blog(req.body);
  blog.save(function (err) {
    if (err) {
      console.log(err);
      res.redirect("/blogs/new");
    }
    res.redirect("/blogs");
  });
}

function show(req, res) {
  res.render("blogs/show", { title: "Blog", style: "style.css" });
}
