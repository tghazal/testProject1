var express = require("express");
var path = require("path")
var app = express();

app.use(express.static(__dirname + '/public'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var PORT = process.env.PORT || 3000;

// var animals=[{"name":"dog","sound":"woof"},    {"name":"cat","sound":"meww"} ]

var routes = require("./controller/controller.js")
app.use(routes)

// //api /routes
// app.get("/api/animals",function(req,res){
//     console.log("in server")
// res.json(animals)
// //res.render("animals",{"name":"dog"})
// })

// //html routes 
// app.get("/", function (req, res) {
//    // res.sendFile(path.join(__dirname,"index.html"))
//     res.render("index")
   
// })

// app.get("/animals", function (req, res) {
//     // res.sendFile(path.join(__dirname,"index.html"))
//      res.render("animals")
    
//  })
app.listen(PORT, function () {
    console.log(`listening on http://localhost:${PORT}`)

})
