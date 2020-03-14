const AndamentoNazionale = require("../models/andamentonazionale.model");
const mongoose = require("mongoose");

class AndamentoNazionaleRepository {
  async updateAll(list) {
    try {
      // test.map(item => console.log(item));
      for (let element of list) {
        // console.log(element);
        AndamentoNazionale.findOne(
          {
            data: element.data
          },
          function(err, doc) {
            if (!doc) {
              new AndamentoNazionale({
                ...element,
                _id: new mongoose.Types.ObjectId()
              }).save();
            }
          }
        );
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll() {
    try {
      return await AndamentoNazionale.find(
        {},
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

module.exports = AndamentoNazionaleRepository;
