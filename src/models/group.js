
import { model, Schema } from "mongoose";
import group from "../interfaces/group";

const groupSchema = new Schema<group>({
  name: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  instructor: { type: String, required: true },
  clients: { type: [String], required: true },
});

export default model("group", groupSchema);