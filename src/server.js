import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const home = (req, res) => {
  return res.send("I'm listening");
};

const handleLogin = (req, res) => {
  return res.send({ message: "Login here" });
};

app.use(logger);
app.get("/", home);
app.get("/login", handleLogin);

app.listen(PORT, () => {
  console.log(`🕹server listening on port http://localhost:${PORT} 👓`);
});
