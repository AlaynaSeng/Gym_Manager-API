import { model, Schema } from "mongoose";
import client from "../interfaces/client";

const clientSchema = new Schema<client>({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: String, required: true },
  price: { type: String, required: true },
});

export default model("client", clientSchema);