const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RegioniSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  data: mongoose.Schema.Types.String,
  stato: mongoose.Schema.Types.String,
  codice_regione: mongoose.Schema.Types.Number,
  denominazione_regione: mongoose.Schema.Types.String,
  lat: mongoose.Schema.Types.Decimal128,
  long: mongoose.Schema.Types.Decimal128,
  ricoverati_con_sintomi: mongoose.Schema.Types.Number,
  terapia_intensiva: mongoose.Schema.Types.Number,
  totale_ospedalizzati: mongoose.Schema.Types.Number,
  isolamento_domiciliare: mongoose.Schema.Types.Number,
  totale_attualmente_positivi: mongoose.Schema.Types.Number,
  nuovi_attualmente_positivi: mongoose.Schema.Types.Number,
  dimessi_guariti: mongoose.Schema.Types.Number,
  deceduti: mongoose.Schema.Types.Number,
  totale_casi: mongoose.Schema.Types.Number,
  tamponi: mongoose.Schema.Types.Number
});

module.exports = mongoose.model("Regioni", RegioniSchema);
