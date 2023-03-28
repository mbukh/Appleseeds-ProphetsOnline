const express = require("express");
const router = express.Router();
const { addAuthor, updateAuthor, getAuthor, deleteAuthor, getAuthors,getAllPostsForAuthor } = require("../Controller/AuthorController");
router.get("/:id", getAuthor);
router.get("/", getAuthors);
// router.get("/name", getAuthors);
router.post("/", addAuthor);
router.delete("/:id", deleteAuthor);
router.put("/:id", updateAuthor);
router.get("/:id/posts", getAllPostsForAuthor);

module.exports = router