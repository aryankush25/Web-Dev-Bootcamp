var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var campgrounds = [
        {name: "Himalayas", image: "https://www.adventurenation.com/blog/wp-content/uploads/2016/10/shutterstock_134817827.jpg"},
        {name: "Goa", image: "https://www.hlimg.com/images/places2see/738X538/Goa-cover-image_1472037578p.jpg"},
        {name: "Shimla", image: "https://www.hlimg.com/images/things2do/738X538/toytrainshimla_1506540634t.jpg"}
];

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {
        campgrounds: campgrounds
    });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {
        name: name,
        image: image
    };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!!");
});