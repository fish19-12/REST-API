const express = require("express");
const app = express();

const userRoutes = require("./routes/userRoutes.js");

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API Working");
});

module.exports = app;
