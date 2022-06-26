import "./db.js";
import "./models/Video.js";
import app from "./server.js";

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`✅ server listening on http://localhost:${PORT} 👓`);
});
