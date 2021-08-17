const mongoose = require("mongoose");
const { Schema } = mongoose;

const Address = require("./schemas/Address");

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: Address,
});

module.exports = mongoose.model("User", UserSchema);
