const fakeUser = {
  name: "Jay",
  loggedIn: true,
};
let videos = [
  {
    title: "HELLO",
    rating: 5,
    comment: 2,
    createAt: "1 hours ago",
    views: 59,
    id: 0,
  },
  {
    title: "COOL",
    rating: 5,
    comment: 2,
    createAt: "1 hours ago",
    views: 59,
    id: 1,
  },
  {
    title: "I know what you've done before",
    rating: 5,
    comment: 5,
    createAt: "1 hours ago",
    views: 59,
    id: 2,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  return res.render("watch", {
    pageTitle: `Watching ${video.title}`,
    fakeUser,
    video,
  });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  return res.render("edit", { fakeUser, pageTitle: "Edit Video", video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  console.log(title);
  return res.redirect(`/videos/${id}`);
};

export const search = (req, res) => {
  return res.send("search");
};

export const upload = (req, res) => res.send("upload video");

export const deleteVideo = (req, res) => res.send("delete Video");
