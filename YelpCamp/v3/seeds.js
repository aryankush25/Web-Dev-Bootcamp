var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Himalayas",
            image: "https://www.adventurenation.com/blog/wp-content/uploads/2016/10/shutterstock_134817827.jpg",
            descipition: "This Is Himalayas"
        },
        {
            name: "Goa", 
            image: "https://www.hlimg.com/images/places2see/738X538/Goa-cover-image_1472037578p.jpg",
            descipition: "This is a beach in India"
        },
        {
            name: "Shimla",
            image: "https://www.hlimg.com/images/things2do/738X538/toytrainshimla_1506540634t.jpg",
            descipition: "This is best hill station in India"
        }
];

function seedDB() {
    Campground.remove({}, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Campgrounds Removed");
        }
        
        data.forEach(function(seed) {
            Campground.create(seed, function(err, campground) {
                if(err) {
                    console.log(err);
                } else {
                    console.log("Created new campground");
                    Comment.create({
                        text: "This is a greate place i wish there war internet",
                        author: "Rahul"
                    }, function(err, comment) {
                        if (err) {
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    });
                }
            });
        });
    });
}

module.exports = seedDB;