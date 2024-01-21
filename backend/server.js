const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());

app.get("/api/test/data", (req, res) => {
  res.json({ info: "this data is send from backend" });
});
// ..............deployment...................
const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/frontend/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"))
);
// ..............deployment...................

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
