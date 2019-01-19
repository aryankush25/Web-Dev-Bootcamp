var app = require("express")();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/result", function(req, res) {
    var name = req.query.search;
    var url = "http://omdbapi.com/?s=" + name +"&apikey=thewdb"
    request(url, function(error, response, body) {
        if(!error && response.statusCode == 200) {
            var jsonObj = JSON.parse(body);
            res.render("results", {
                data: jsonObj
            });
            console.log("Result Page Requested");
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The Movie App Is Conected!!!");
});