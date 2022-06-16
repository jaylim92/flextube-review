const fakeUser = {
  name: "Jay",
  loggedIn: true,
};

export const trending = (req, res) => {
  const videos = [
    {
      title: "hello",
      rating: 5,
      comment: 2,
      createAt: "1 hours ago",
      views: 59,
      id: 1,
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
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", fakeUser, videos });
};

export const watch = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};

export const editVideo = (req, res) => res.render("edit");

export const search = (req, res) => {
  return res.send("search");
};

export const upload = (req, res) => res.send("upload video");

export const deleteVideo = (req, res) => res.send("delete Video");
