const express = require('express');
const router = express.Router();
const comsCtrl = require("../controllers/comment");
const isLoggedIn = require("../config/auth");

router.post("/blogs/:id/comments", isLoggedIn, comsCtrl.create); // post a comment
router.delete("/comments/:id", isLoggedIn, comsCtrl.delete);// delete a comment
router.put("/comments/:id", isLoggedIn, comsCtrl.update);// edit comment
module.exports = router;