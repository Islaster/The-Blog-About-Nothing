const router = require("express").Router();
const blogsCtrl = require("../controllers/blogs");

router.get("/new", blogsCtrl.new); //Create Page
router.get("/", blogsCtrl.index); //All Blogs page

module.exports = router;
