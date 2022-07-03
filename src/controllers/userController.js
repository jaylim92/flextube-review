import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  const { name, email, password, password2, username, location } = req.body;
  const exist = await User.exists({ $or: [{ username }, { email }] });
  const pageTitle = "Join";
  if (exist) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Username/email already exist",
    });
  }
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password dosen't Match",
    });
  }
  try {
    await User.create({
      name,
      email,
      password,
      username,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    const errorMessage = error._message;
    return res.status(400).render("join", { pageTitle: "Join", errorMessage });
  }
};

export const getLogin = (req, res) => {
  return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const pageTitle = "Login";
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "User doesn't exist",
    });
  }
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Password was wrong",
    });
  }
  res.redirect("/");
};

export const see = (req, res) => res.send("see user");

export const editUser = (req, res) => {
  return res.send("edit user");
};

export const logout = (req, res) => {
  return res.send("logout");
};

export const userDelete = (req, res) => {
  return res.send("remove");
};
