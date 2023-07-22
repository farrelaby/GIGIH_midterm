const mongoose = require("mongoose");

const dbUrl = process.env.DB_URL;

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error(err);
  });

const productSchema = new mongoose.Schema({
  url: String,
  image_url: String,
  title: String,
  price: Number,
});

const videoSchema = new mongoose.Schema({
  url: String,
  thumbnail_url: String,
  products: [productSchema],
});

const commentsSchema = new mongoose.Schema({
  comment: String,
  username: String,
  timestamp: Date,
  video_id: String,
});

const Video = mongoose.model("Video", videoSchema);
const Comment = mongoose.model("Comment", commentsSchema);

module.exports = { Video, Comment };
