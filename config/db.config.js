const mongoose = require("mongoose");
const MongoMemoryServer = require("mongodb-memory-server").MongoMemoryServer;

let mongoServer;
const initialiteDatabase = async () => {

  try {
    mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri(), {
      dbName: "inesdi-express-api-crud",
    }).then(() => console.log("Connected to database"));

    process.on("SIGINT", async () => {
      await closeDatabase();
      process.exit(0);
    });
  } catch (err) {
    console.log("Database connection error: " + err);
    process.exit(1);
  }
};

const closeDatabase = async () => {

  try {
    if (mongoServer) {
      await mongoose.connection.dropDatabase();
      await mongoose.connection.close();
      await mongoServer.stop();
      console.log("Database connection closed");
    }
  } catch (error) {
    console.log("Error closing database connection: " + error);
  }
};

module.exports = {
  initialiteDatabase
};

