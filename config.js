const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongoKey: process.env.MONGO_URI,
};
