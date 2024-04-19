const mongoose = require("mongoose");


const Schema = mongoose.Schema;


const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
});


const BookRecord = mongoose.model("bookRecord", bookSchema);
module.exports = BookRecord;