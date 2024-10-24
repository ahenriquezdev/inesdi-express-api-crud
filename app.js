const express = require("express");
const app = express();
const { initialiteDatabase } = require("./config/db.config");
const config = require("./config/config");

initialiteDatabase();

const postRoutes = require("./routes/post.routes");

// middlewares
app.use(express.json());

// custom routes
app.use("/api", postRoutes);

app.listen(config.PORT, () => {
  console.log("Server started on port 3000");
});

module.exports = app;
