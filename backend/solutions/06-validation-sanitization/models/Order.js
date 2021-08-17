const mongoose = require("mongoose");
//const { Schema } = mongoose;

const OrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  record: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Record",
    },
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
