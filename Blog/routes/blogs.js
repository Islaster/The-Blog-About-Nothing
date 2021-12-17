const router = require("express").Router();
const blogsCtrl = require("../controllers/blogs");

//Get Routes
router.get("/new", blogsCtrl.new); //Create Page
router.get("/", blogsCtrl.index); //All Blogs page

//Post Routes
router.post("/", blogsCtrl.create);

module.exports = router;
