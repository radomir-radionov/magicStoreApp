const { Schema, model } = require("mongoose");
const GameSchema = require("./game-model").schema;

const UserSchema = new Schema({
  role: { type: String, ref: "Role" },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  avatar: {
    contentType: { type: String },
    data: { type: Buffer },
  },
  cart: [GameSchema],
});

module.exports = model("User", UserSchema);
