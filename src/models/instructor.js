
import { model, Schema } from "mongoose";
import instructor from "../interfaces/onstructor";

const instructorSchema = new Schema<instructor>({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
});

export default model("instructor", instructorSchema);