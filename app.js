const express = require("express");
const mongoose = require("mongoose");
const data = require("./routes/data");
const githubData = require("./routes/githubData");
const githubCsv = require("./routes/githubCsv");
const boot = require("./boot/boot");
// const graphql = require("./routes/graphql");
const config = require("./config/config");
require("./cron/cron");

const url = process.env.MONGODB_URI || config.database.url;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(url);
const app = express();

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

data(app);
githubData(app);
githubCsv(app);

// graphql(app);

boot.initializeAndamentoNazionale();
boot.initializeRegioni();
boot.initializeProvince();

app.listen(process.env.PORT || 4000, function() {
  console.log("Example app listening on port 4000!");
});
