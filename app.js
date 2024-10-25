const express = require("express");
const app = express();
const { initialiteDatabase } = require("./config/db.config");
const config = require("./config/config");

initialiteDatabase();

const postRoutes = require("./routes/post.routes");
const userRoutes = require("./routes/user.routes");

// middlewares
app.use(express.json());

// custom routes
app.use("/api", postRoutes);
app.use("/api", userRoutes);

app.listen(config.PORT, () => {
  console.log(`Server running on port http://localhost:${config.PORT}`);
});

module.exports = app;
