const bodyParser = require("body-parser");
const requestJSON = require("../utils/requestJSON");
const path = require("../config/path.js");
const moment = require("moment");
moment().format();

const AndamentoNazionaleRepository = require("../repository/andamentonazionale.repository");
const andamentonNazionaleRepository = new AndamentoNazionaleRepository();

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/andamento-nazionale-json", function(req, res) {
    let url = path["andamento-nazionale-json"];
    return requestJSON(url, res);
  });

  app.get("/province-json", function(req, res) {
    let url = path["province-json"];
    return requestJSON(url, res);
  });

  app.get("/regioni-json", function(req, res) {
    let url = path["regioni-json"];
    return requestJSON(url, res);
  });
};
