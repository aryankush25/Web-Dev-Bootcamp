var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose", { useNewUrlParser: true });
var Campground = require("./models/campground");
var seedDB = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");


// Campground.create(
//     {
//         name: "Goa",
//         image: "https://www.hlimg.com/images/places2see/738X538/Goa-cover-image_1472037578p.jpg",
//         descreption: "This Is A very God Beach"
//     }, function(err, campground){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(campground);
//         }
//     }
// );

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    Campground.find({}, function(err, campgrounds) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { campgrounds: campgrounds });
        }
    });
});

app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.descreption;
    
    var newCampground = {
        name: name,
        image: image,
        descreption: desc
    };
    Campground.create(newCampground, function(err, campground){
            if (err) {
                console.log(err);
            } else {
                console.log(campground);
            }
        }
    );
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
    
    Campground.findById(req.params.id, function(err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            res.render("show", { campgrounds: foundCampground });
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The YelpCamp Server Has Started!!");
});