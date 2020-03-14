const bodyParser = require("body-parser");
const moment = require("moment");
const _ = require("lodash");
moment().format();
const request = require("../utils/request");

const AndamentoNazionaleRepository = require("../repository/andamentonazionale.repository");
const RegioniRepository = require("../repository/regioni.repository");
const ProvinceRepository = require("../repository/province.repository");

const andamentonNazionaleRepository = new AndamentoNazionaleRepository();
const regioniRepository = new RegioniRepository();
const provinceRepository = new ProvinceRepository();

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/test", async function(req, res) {
    try {
      let url = path["andamento-nazionale-json"];
      const andamentoNazionale = await request(url);
      res.send(andamentoNazionale);
    } catch (err) {
      console.log(err);
      res.send("error");
    }
  });

  app.get("/andamento-nazionale", async function(req, res) {
    try {
      const collection = await andamentonNazionaleRepository.findAll();
      res.send(collection);
    } catch (err) {
      console.log(err);
      res.send("error");
    }
  });

  app.get("/regioni", async function(req, res) {
    try {
      let collection = [];
      if (req.query.code) {
        collection = await regioniRepository.findByRegion(req.query.code);
      } else {
        collection = await regioniRepository.findAll();
      }
      res.send(collection);
    } catch (err) {
      console.log(err);
      res.send("error");
    }
  });

  app.get("/province", async function(req, res) {
    try {
      let collection = [];
      if (req.query.code) {
        collection = await provinceRepository.findByRegion(req.query.code);
      } else {
        collection = await provinceRepository.findAll();
      }
      const grouped = _.mapValues(
        _.groupBy(collection, "denominazione_provincia")
      );
      // res.send(collection);
      res.send(grouped);
    } catch (err) {
      console.log(err);
      res.send("error");
    }
  });
};
