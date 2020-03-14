const Regioni = require("../models/regioni.model");
const mongoose = require("mongoose");

class RegioniRepository {
  async updateAll(list) {
    try {
      list.forEach(element => {
        Regioni.findOne(
          {
            $and: [
              { data: element.data },
              { codice_regione: element.codice_regione }
            ]
          },
          function(err, doc) {
            if (!doc) {
              new Regioni({
                ...element,
                _id: new mongoose.Types.ObjectId()
              }).save();
            }
          }
        );
      });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await Regioni.find({}, null, { sort: { data: 1 } }, function(
        error,
        docs
      ) {
        return docs;
      });
    } catch (error) {
      return error;
    }
  }

  async findByRegion(code) {
    try {
      return await Regioni.find(
        { codice_regione: code },
        null,
        { sort: { data: 1 } },
        function(error, docs) {
          return docs;
        }
      );
    } catch (error) {
      return error;
    }
  }
}

module.exports = RegioniRepository;
