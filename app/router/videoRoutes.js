const express = require("express");

const VideoController = require("../controllers/videoController");

const router = express.Router();

// router.get("/", (req, res) => res.send("anjayy"));
router.get("/", VideoController.getAllVideos);
router.get("/:id", VideoController.getVideoById);
router.post("/", VideoController.addVideo);

module.exports = router;
