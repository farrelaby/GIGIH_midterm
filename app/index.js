const express = require("express");

const app = express();
const videoRoutes = require("./router/videoRoutes");
const commentRoutes = require("./router/commentRoutes");

app.use(express.json());

app.use("/v1/videos", videoRoutes);
app.use("/v1/comments", commentRoutes);

app.use((req, res) => {
  res.status(404).send("Not Found/Invalid route");
});

module.exports = app;
