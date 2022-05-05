const { model, Schema } = require("mongoose");

const clientSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  registration: { type: Date, required: true },
  price: { type: String, required: true },
});

module.exports = model("client", clientSchema);