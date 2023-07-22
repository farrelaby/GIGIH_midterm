const VideoRepository = require("../repositories/videoRepository");

const VideoService = {
  getAllVideos: async () => {
    const videos = await VideoRepository.getAllVideos();
    const returnVideoThumbnails = videos.map((video) => {
      return {
        id: video._id,
        thumbnail: video.thumbnail_url,
      };
    });
    return returnVideoThumbnails;
  },
  getVideoById: async (id) => {
    const video = await VideoRepository.getVideoById(id);
    const returnVideo = {
      id: video._id,
      url: video.url,
      products: video.products,
    };
    return returnVideo;
  },
  addVideo: async (video) => {
    return await VideoRepository.addVideo(video);
  },
};

module.exports = VideoService;
