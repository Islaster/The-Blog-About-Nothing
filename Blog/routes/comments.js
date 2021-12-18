const comsCtrl = require("../controllers/comment");
const isLoggedIn = require("../config/auth");

router.post("blogs/:id/comments", isLoggedIn, comsCtrl.create); // posting to show
