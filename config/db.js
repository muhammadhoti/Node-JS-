var mongoose = require("mongoose");
mongoose.connect(
    "mongodb://jordan:jord007@ds063546.mlab.com:63546/saylani",
  { useNewUrlParser: true }
);

module.exports = mongoose;
