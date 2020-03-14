const csv = require("csvtojson");
const request = require("request");

module.exports = req => {
  return csv().fromStream(request.get(req));
};
