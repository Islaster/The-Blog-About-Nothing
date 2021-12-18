const router = require("express").Router();
const blogsCtrl = require("../controllers/blogs");

//Get Routes
router.get("/new", blogsCtrl.new); //Create Page
router.get("/All", blogsCtrl.index); //All Blogs page
router.get("/:id", blogsCtrl.show); //blog details

//Post Routes
router.post("/", blogsCtrl.create); //posting to index

module.exports = router;
