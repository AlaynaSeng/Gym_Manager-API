const { model, Schema } = require("mongoose");

const groupSchema = new Schema<group>({
  name: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  instructor: { type: String, required: true },
  clients: { type: [String], required: true },
});

module.exports = model("group", groupSchema);