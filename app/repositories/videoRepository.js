const { Video } = require("../models/models");

const VideoRepository = {
  getAllVideos: async () => {
    return await Video.find();
  },
  getVideoById: async (id) => {
    return await Video.findById(id);
  },
  addVideo: async (video) => {
    return await Video.create(video);
  },
};

module.exports = VideoRepository;
