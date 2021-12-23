const Blog = require("../models/blogs");
module.exports = { index };

async function index(req, res) {
  const blogs = await Blog.find({});
  let myComments = [];
  blogs.forEach((blog) => {
    blog.comments.forEach((comment) => {
      if (comment.author.equals(req.user._id)) {
        myComments.push(comment);
      }
    });
  });

  Blog.find({ author: req.user._id }, function (err, blogs) {
    res.render("users/index", {
      title: "Profile",
      style: "user.css",
      blogs,
      myComments,
    });
  });
}
