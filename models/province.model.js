const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProvinceSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  data: mongoose.Schema.Types.String,
  stato: mongoose.Schema.Types.String,
  codice_regione: mongoose.Schema.Types.Number,
  denominazione_regione: mongoose.Schema.Types.String,
  codice_provincia: mongoose.Schema.Types.Number,
  denominazione_provincia: mongoose.Schema.Types.String,
  sigla_provincia: mongoose.Schema.Types.String,
  lat: mongoose.Schema.Types.Decimal128,
  long: mongoose.Schema.Types.Decimal128,
  totale_casi: mongoose.Schema.Types.Number
});

module.exports = mongoose.model("Province", ProvinceSchema);
