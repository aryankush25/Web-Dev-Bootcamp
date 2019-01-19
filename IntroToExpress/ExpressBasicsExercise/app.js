var express = require("express");
var app = express();

app.get("/", function(req, res) {
    console.log("Main Page Requested");
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, rev) {
    var animal = req.params.animal.toLowerCase();
    console.log("Speak " + animal + " page Requested");
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    }
    var speak = sounds[animal];
    
    rev.send("The " + animal + " says '" + speak + "'");
});

app.get("/repeat/:str/:num", function(req, rev) {
    var str = req.params.str;
    var num = req.params.num;
    console.log("repeat page Requested");
    
    var str1 = "";
    
    
    for (var i = 0; i < num; i++) {
        str1 = str1 + str + " ";
    }
    
    rev.send(str1);
});

app.get("*", function(req, rev) {
    console.log("Not a page");
    rev.send("Sorry, page not found...What are you doing with your life ?");
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Has Started");
})