const exprees = require("express");
const router = exprees.Router();
const { addComment, updateComment, getComment, deleteComment, getComments } = require("../Controller/CommentController");
router.get("/:id", getComment);
router.get("/", getComments);
router.post("/", addComment);
router.delete("/:id", deleteComment);
router.put("/:id", updateComment);

module.exports = router