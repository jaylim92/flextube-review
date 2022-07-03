import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { name, email, password, password2, username, location } = req.body;
  const exist = await User.exists({ $or: [{ username }, { email }] });
  const pageTitle = "Join";
  if (exist) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Username/email already exist",
    });
  }
  if (password !== password2) {
    return res.render("join", {
      pageTitle,
      errorMessage: "Password dosen't Match",
    });
  }
  await User.create({
    name,
    email,
    password,
    username,
    location,
  });
  return res.redirect("/login");
};
export const see = (req, res) => res.send("see user");

export const editUser = (req, res) => {
  return res.send("edit user");
};

export const login = (req, res) => {
  return res.send("login");
};

export const logout = (req, res) => {
  return res.send("logout");
};

export const userDelete = (req, res) => {
  return res.send("remove");
};
