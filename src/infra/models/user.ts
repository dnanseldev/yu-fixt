import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  age: Number,
  Complement: String,
});

const User = model("user", userSchema);

export default User;
