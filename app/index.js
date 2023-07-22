const express = require("express");

const app = express();
const videoRoutes = require("./router/videoRoutes");

app.use(express.json());

app.use("/v1/videos", videoRoutes);

module.exports = app;
