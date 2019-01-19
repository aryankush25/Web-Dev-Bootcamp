var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs")

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/inlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {
        thingVar: thing
    });
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "Post 1", author: "Aryan Agarwal"},
        {title: "Post 2", author: "Kush Agarwal"},
        {title: "Post 3", author: "Rahul Agarwal"}
    ];
    
    res.render("posts", {
        newPosts: posts
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Connected!!");
});