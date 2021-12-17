module.exports = { index };

function index(req, res) {
  res.render("users/index", { title: "User", style: "style.css" });
}
