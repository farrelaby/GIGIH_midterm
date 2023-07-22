const CommentService = require("../services/commentService");

const CommentController = {
  getCommentsByVideoId: async (req, res) => {
    const videoId = req.params.id;
    try {
      const comments = await CommentService.getCommentsByVideoId(videoId);
      res.json(comments);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error getting comments");
    }
  },
  postComment: async (req, res) => {
    const commentBody = req.body;
    try {
      await CommentService.postComment(commentBody);
      res.status(201).send("Comment posted!");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error posting comment");
    }
  },
};

module.exports = CommentController;
