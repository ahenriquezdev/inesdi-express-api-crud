const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 8000,
  JWT_SECRET: process.env.JWT_SECRET
}
