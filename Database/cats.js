var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Billa",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat) {
//     if (err) {
//         console.log("Something Went Wrong");
//     } else {
//         console.log("We Just Saved A Cat In Database");
//         console.log(cat); 
//     }
// });

// Cat.create({
//     name: "Mud White",
//     age: 1,
//     temperament: "Bad"
// }, function(err, cat) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Cat Created");
//         console.log(cat); 
//     }
// });

Cat.find({}, function(err, cats) {
    if (err) {
        console.log("Ohhh No Something Went Wrong");
        console.log(err);
    } else {
        console.log("All The Cats");
        console.log(cats); 
    }
});