var mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    text: String,
    uthor: String
});

module.exports = mongoose.model("Comment", commentSchema);