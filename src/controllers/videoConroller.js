export const trending = (req, res) => {
  return res.render("home");
};

export const watch = (req, res) => {
  return res.render("watch");
};

export const editVideo = (req, res) => res.render("edit");

export const search = (req, res) => {
  return res.send("search");
};

export const upload = (req, res) => res.send("upload video");

export const deleteVideo = (req, res) => res.send("delete Video");
