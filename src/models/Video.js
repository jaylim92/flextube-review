import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  descriptors: String,
  createAt: Date,
  hashtags: [{ type: String }],
  metaData: {
    rating: Number,
    views: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
