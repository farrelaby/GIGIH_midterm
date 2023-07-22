const CommentRepository = require("../repositories/commentRepository");

const CommentService = {
  getCommentsByVideoId: async (videoId) => {
    const comments = await CommentRepository.getCommentsByVideoId(videoId);
    console.log(comments);
    const returnComments = comments.map((comment) => {
      return {
        id: comment._id,
        username: comment.username,
        comment: comment.comment,
        timestamp: comment.timestamp,
      };
    });
    return returnComments;
  },
  postComment: async (commentBody) => {
    const postBody = {
      comment: commentBody.comment,
      username: commentBody.username,
      timestamp: new Date(),
      video_id: commentBody.video_id,
    };
    return await CommentRepository.postComment(postBody);
  },
};

module.exports = CommentService;
