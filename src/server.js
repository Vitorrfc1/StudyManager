require("dotenv").config();

const express = require("express");
const routes = require("./routes/routes");

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "StudyManager API running 🚀"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});