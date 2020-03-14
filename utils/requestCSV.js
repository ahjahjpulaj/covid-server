const csvToJson = require("../utils/csvToJson");

module.exports = (url, res) => {
  //   return csv().fromStream(req);
  return csvToJson(url)
    .then(body => {
      res.send(body);
    })
    .catch(err => {
      console.log(err);
      res.send("error");
    });
};
