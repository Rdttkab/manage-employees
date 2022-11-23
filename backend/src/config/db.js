const mongoose = require("mongoose");
const { config } = require("dotenv");

config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = async (url) => {
  try {
    await mongoose.connect(url || process.env.MONGO_DB_LOCAL, connectionParams);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connected to MongoDB failed: ", error);
  }
};

module.exports = connect;
