const request = require("../utils/request");

const AndamentoNazionaleRepository = require("../repository/andamentonazionale.repository");
const RegioniRepository = require("../repository/regioni.repository");
const ProvinceRepository = require("../repository/province.repository");

const andamentonNazionaleRepository = new AndamentoNazionaleRepository();
const regioniRepository = new RegioniRepository();
const provinceRepository = new ProvinceRepository();

/* 
clear all Collections (later not needed)

get data from api (later update only new values)

update collection
*/

module.exports = {
  initializeAndamentoNazionale: async function() {
    // await andamentonNazionaleRepository.deleteAll();
    let url = path["andamento-nazionale-json"];
    console.log(url);
    const andamentoNazionale = await request(url);
    await andamentonNazionaleRepository.updateAll(andamentoNazionale);
  },
  initializeRegioni: async function() {
    // await andamentonNazionaleRepository.deleteAll();
    let url = path["regioni-json"];
    const regioni = await request(url);
    await regioniRepository.updateAll(regioni);
  },
  initializeProvince: async function() {
    // await andamentonNazionaleRepository.deleteAll();
    let url = path["province-json"];
    const province = await request(url);
    await provinceRepository.updateAll(province);
  }
};
