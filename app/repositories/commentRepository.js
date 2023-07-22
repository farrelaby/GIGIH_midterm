const { Comment } = require("../models/models");

const CommentRepository = {
  getCommentsByVideoId: async (videoId) => {
    return await Comment.find({ video_id: videoId });
  },
  postComment: async (commentBody) => {
    return await Comment.create(commentBody);
  },
};

module.exports = CommentRepository;
