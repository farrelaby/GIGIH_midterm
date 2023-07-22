const VideoService = require("../services/videoService");

const VideoController = {
  getAllVideos: async (req, res) => {
    try {
      const videos = await VideoService.getAllVideos();
      res.json(videos);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error getting videos");
    }
  },
  getVideoById: async (req, res) => {
    const videoId = req.params.id;
    try {
      const video = await VideoService.getVideoById(videoId);
      res.json(video);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error getting video details");
    }
  },
  addVideo: async (req, res) => {
    const video = req.body;
    const newVideo = await VideoService.addVideo(video);
    res.json(newVideo);
  },
};

module.exports = VideoController;
