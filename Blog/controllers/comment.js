const Blog = require("../models/blogs");

module.exports = {
  create,
  delete: deleteOne,
  update
};

function create(req, res) {
  // Find the blog to embed the comment within
  Blog.findById(req.params.id, function (err, blog) {
    // Add the user-centric info to req.body (the new comment)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    req.body.author = req.user._id;

    // Push the subdoc for the comment
    blog.comments.push(req.body);
    // Always save the top-level document (not subdocs)
    blog.save(function (err) {
      if(err) return res.status(404).send(err);
      res.redirect(`/blogs/${blog._id}`);
    });
  });
}

function deleteOne(req, res, next){
   // Note the cool "dot" syntax to query on the property of a subdoc
   Blog.findOne({ "comments._id": req.params.id }).then(function ( blog) {
    // Find the review subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const comment = blog.comments.id(req.params.id);
    // Ensure that the review was created by the logged in user
    if (!blog.author.equals(req.user._id))
      return res.redirect(`/blogs/${blog._id}`);
    // Remove the review using the remove method of the subdoc
    comment.remove();
    // Save the updated movie
    blog
      .save()
      .then(function () {
        // Redirect back to the movie's show view
        res.redirect(`/blogs/${blog._id}`);
      })
      .catch(function (err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
  });
}

function update(req, res, next){
  // Note the cool "dot" syntax to query on the property of a subdoc
  Blog.findOne({ "comments._id": req.params.id }).then(function ( blog) {
    // Find the review subdoc using the id method on Mongoose arrays
    // https://mongoosejs.com/docs/subdocs.html
    const comment = blog.comments.id(req.params.id);
    // Ensure that the review was created by the logged in user
    if (!blog.author.equals(req.user._id))
      return res.redirect(`/blogs/${blog._id}`);
    // Remove the review using the remove method of the subdoc
    
    comment.content = req.body.content;
    // Save the updated movie
    blog
      .save()
      .then(function () {
        // Redirect back to the movie's show view
        res.redirect(`/blogs/${blog._id}`);
      })
      .catch(function (err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
  });
}