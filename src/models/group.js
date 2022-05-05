const { model, Schema } = require("mongoose");

const groupSchema = new Schema({
  name: { type: String, required: true },
  schedule: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  instructor: { type: String, required: true },
  client: { type: String, required: true },
});

module.exports = model("group", groupSchema);