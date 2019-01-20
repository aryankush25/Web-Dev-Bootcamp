var mongoose = require("mongoose", { useNewUrlParser: true });

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    descreption: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

module.exports = Campground;