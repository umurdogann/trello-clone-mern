const mongoose = require("mongoose");

const boardSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    backgroundImageLink: {
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
        surname:{
          type: String,
        },
        role: {
          type: String,
          default: "owner",
        },
      },
    ],
    lists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "lists"
      }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("board", boardSchema);
