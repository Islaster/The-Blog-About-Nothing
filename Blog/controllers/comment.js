const Blog = require("../models/blogs");

module.exports = {
  create,
};
function create(req, res) {
  // Find the blog to embed the comment within
  Blog.findById(req.params.id, function (err, blog) {
    // Add the user-centric info to req.body (the new comment)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // Push the subdoc for the comment
    blog.comments.push(req.body);
    // Always save the top-level document (not subdocs)
    blog.save(function (err) {
      res.redirect(`/movies/${blog._id}`);
    });
  });
}
