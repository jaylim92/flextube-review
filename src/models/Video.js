import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  createAt: { type: Date, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    rating: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith(`#`) ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
