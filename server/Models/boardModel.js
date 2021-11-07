const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    activity: [
      {
        action: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    members: [
      {
        _id: false,
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        name: {
          type: String,
        },
        role: {
          type: String,
          default: "owner",
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("board", boardSchema);
