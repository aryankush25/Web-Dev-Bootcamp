var app = require("express")();
var bodyParser = require("body-parser");
var friends = ["Aryan", "Karan", "Rochit", "Arun", "Aseem", "Ayush", "Anshul"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", {
        friends: friends
    });
});

app.listen(process.env.PORT, function(req, res) {
    console.log("Server Connected");
});