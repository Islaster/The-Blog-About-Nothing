const Blog = require("../models/blogs");
module.exports = { index };

function index(req, res) {
  Blog.find({}, function (err, blogs) {
    res.render("users/index", {
      title: "Profile",
      style: "style.css",
      blogs,
    });
  });
}
