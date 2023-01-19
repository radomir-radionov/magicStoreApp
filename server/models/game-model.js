const { Schema, model } = require("mongoose");

const GameSchema = new Schema({
  data: { type: Number, required: true },
});

module.exports = model("Game", GameSchema);
