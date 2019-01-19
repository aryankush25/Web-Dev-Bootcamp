var express = require("express");
var app = express();

app.get("/", function(req, res) {
    console.log("Someone made a request");
    res.send("Hi There!!");
});

app.get("/cat", function(req, res) {
    console.log("Someone made a request to cat");
    res.send("MEOW!!");
});

app.get("/dog", function(req, res) {
    console.log("Someone made a request to dog");
    res.send("Bark!!");
});

app.get("/r/:subname", function(req, res) {
    var subname = req.params.subname;
    console.log("SubName " + subname);
    res.send("SubName " + subname.toUpperCase());
});

app.get("*", function(req, res) {
    console.log("Someone made a request to Not Existing URL");
    res.send("You Are A Star!!");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server Has Started!!");
});