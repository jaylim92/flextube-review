import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/flextube");

const db = mongoose.connection;

db.on("error", (error) => {
  console.log("❌ DB Error", error);
});

db.once("open", () => {
  console.log("✅ DB connected");
});
