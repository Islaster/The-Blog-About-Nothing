module.exports = {
  index,
};

function index(req, res) {
  res.render("index", { title: "Welcome", style: "index.css" });
}
