require("dotenv").config();
module.exports = {
  env: {
    MONGO_URI: process.env.NEXT_EXAMPLE_MONGO_DBURI,
    NEXT_EXAMPLE_BASE_URL: process.env.NEXT_EXAMPLE_BASE_URL
  }
};
