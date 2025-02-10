const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Node.js backend running" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
