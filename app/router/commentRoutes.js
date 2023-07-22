const CommentController = require("../controllers/commentController");
const express = require("express");

const router = express.Router();

router.get("/:id", CommentController.getCommentsByVideoId);
router.post("/", CommentController.postComment);

module.exports = router;
