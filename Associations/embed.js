var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
//var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "aryan25@gmail.com",
//     name: "Kush Agarwal"
// });

// newUser.posts.push({
//     title: "How to creat a blog",
//     content: "You can create it by using MEN Stack"
// });



// newUser.save(function(err, user) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new postModel({
//     title: "Apple",
//     content: "They are delicious"
// });
// newPost.save(function(err, post) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(post);
//     }
// });

User.findOne({name: "Kush Agarwal"}, function(err, user) {
    if(err) {
        console.log(err);
    }
    else {
        user.posts.push({
            title: "Three things i have the most",
            content: "Love.. Love.. Love.."
        });
        console.log(user);
    }
});