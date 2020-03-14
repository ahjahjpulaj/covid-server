const config = {};

config.database = {
  name: "covid",
  url: "mongodb://localhost:27017/covid"
};
config.port = 3000;

module.exports = config;
