const Blog = require("../models/blogs");
module.exports = {
  index,
  new: newBlog,
  create,
  show,
  delete: deleteBlog,
};

function index(req, res) {
  Blog.find({}, function (err, blogs) {
    res.render("blogs/index", {
      title: "All Blogs",
      style: "blogIndex.css",
      blogs,
    });
  });
}

function newBlog(req, res) {
  res.render("blogs/new", { title: "Create Blog", style: "new.css" });
}

function create(req, res) {
  const blog = new Blog(req.body);
  blog.author = req.user._id;

  blog.save(function (err) {
    if (err) {
      console.log(err);
      res.redirect("/blogs/new");
    }
    res.redirect("/blogs/All");
  });
}

function show(req, res) {
  Blog.findById(req.params.id, function (err, blog) {
    if (err) {
      console.log(err);
      res.redirect("/blogs");
    }
    res.render("blogs/show", {
      title: `${blog.title}`,
      style: "show.css",
      blog,
    });
  });
}

function deleteBlog(req, res) {
  Blog.findOneAndDelete(
    // Ensue that the blog was created by the logged in user
    { _id: req.params.id, author: req.user._id },
    function (err) {
      // Deleted blog, so must redirect to index
      res.redirect("/blogs/All");
    }
  );
}
