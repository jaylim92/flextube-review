import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  userAvatar: String,
  socialOnly: { type: Boolean, default: false },
  password: { type: String },
  username: { type: String, require: true },
  location: { type: String, require: true },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);

export default User;
