const { model, Schema } = require("mongoose");

const instructorSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
});

module.exports = model("instructor", instructorSchema);