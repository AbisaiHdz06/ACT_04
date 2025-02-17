const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/status", (req, res) => {
  res.json({ message: "server is running!" });
});

module.exports = app; 

