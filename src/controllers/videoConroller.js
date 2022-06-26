import Video from "../models/Video";

const fakeUser = {
  name: "Jay",
  loggedIn: true,
};

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    return res.render("home", { pageTitle: "Home", fakeUser, videos });
  } catch (error) {
    return res.send("error");
  }
};

export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", {
    pageTitle: `Watching`,
    fakeUser,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { fakeUser, pageTitle: "Edit Video" });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { fakeUser });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};
