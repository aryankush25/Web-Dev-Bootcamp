var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//     email: "aryankush025@gmail.com",
//     name: "Aryan Agarwal"
// });

// Post.create({
//     title: "New MacBook 2",
//     content: "MacBook is best in the world for programming World and Development"
// }, function(err, post) {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         User.findOne({email: "aryankush025@gmail.com"}, function(err, foundUser) {
//             if(err) {
//                 console.log(err);
//             }
//             else {
//                 foundUser.posts.push(post);
//                 foundUser.save(function(err, data) {
//                     if(err) {
//                         console.log(err);
//                     }
//                     else {
//                         console.log(data);
//                     }
//                 });
//             }
//         });
//     }
// });

User.findOne({email: "aryankush025@gmail.com"}).populate("posts").exec(function(err, user) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(user);
    }
});