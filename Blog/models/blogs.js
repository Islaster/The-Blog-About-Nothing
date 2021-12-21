const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    
    comments: [commentSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
