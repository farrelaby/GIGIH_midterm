const VideoService = require("../services/videoService");

const VideoController = {
  getAllVideos: async (req, res) => {
    const videos = await VideoService.getAllVideos();
    res.json(videos);
  },
  getVideoById: async (req, res) => {
    const videoId = req.params.id;
    const video = await VideoService.getVideoById(videoId);
    res.json(video);
  },
  addVideo: async (req, res) => {
    const video = req.body;
    const newVideo = await VideoService.addVideo(video);
    res.json(newVideo);
  },
};

module.exports = VideoController;
