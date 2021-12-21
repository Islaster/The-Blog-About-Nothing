const router = require("express").Router();
const blogsCtrl = require("../controllers/blogs");
const isLoggedIn = require("../config/auth");

//Get Routes
router.get("/new", blogsCtrl.new); //Create Page
router.get("/All", blogsCtrl.index); //All Blogs page
router.get("/:id", blogsCtrl.show); //blog details

//Post Routes
router.post("/", isLoggedIn, blogsCtrl.create); //posting to index

//Delete Routes
router.delete("/:id", isLoggedIn, blogsCtrl.delete);
module.exports = router;
