const exprees = require("express");
const router = exprees.Router();
const { addPost, updatePost, getPost, deletePost,getPosts,getAllCommentsForPosts } = require("../Controller/PostController");

router.get("/:id", getPost);
router.get("/:id/comments", getAllCommentsForPosts);
router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

module.exports = router