const Province = require("../models/province.model");
const mongoose = require("mongoose");

class ProvinceRepository {
  async updateAll(list) {
    try {
      list.forEach(element => {
        Province.findOne(
          {
            $and: [
              { data: element.data },
              { codice_provincia: element.codice_provincia }
            ]
          },
          function(err, doc) {
            if (!doc) {
              new Province({
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
      return await Province.find({}, null, { sort: { data: 1 } }, function(
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
      return await Province.find(
        { codice_regione: code },
        null,
        { sort: { data: 1, codice_provincia: 1 } },
        function(error, docs) {
          return docs;
        }
      );
    } catch (error) {
      return error;
    }
  }
}

module.exports = ProvinceRepository;
