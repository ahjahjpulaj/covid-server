const bodyParser = require("body-parser");
const requestCSV = require("../utils/requestCSV");
const moment = require("moment");
moment().format();

path = require("../config/path.js");

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/regioni-csv", function(req, res) {
    let url = path["regioni-csv"];
    return requestCSV(url, res);
  });

  app.get("/province-csv", function(req, res) {
    let url = path["province-csv"];
    return requestCSV(url, res);
  });

  app.get("/andamento-nazionale-csv", function(req, res) {
    let url = path["andamento-nazionale-csv"];
    return requestCSV(url, res);
  });
};
