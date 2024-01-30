const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
    },
    phone: {
      type: Number,
      required: [true, "Phone Number is required."],
    },
    service: {
      type: String,
      required: [true, "service is required"],
    },
    message: {
      type: String,
      required: [true, "message is required."],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: {
      virtuals: true,
    },
  }
);

const form = mongoose.model("formdata", formSchema);

module.exports = form;
