var express = require("express")

var router = express.Router();
var animals=[{"name":"dog","sound":"woof", "flag":true}, {"name":"cat","sound":"meww", "flag":false} ]


//api routes
router.get("/api/animals", function (req, res) {
    console.log("in server")
   // res.json(animals)
    res.render("animals",{data:animals})
})

//html routes 
router.get("/", function (req, res) {
    // res.sendFile(path.join(__dirname,"index.html"))
    res.render("index")

})

router.get("/animals", function (req, res) {
    // res.sendFile(path.join(__dirname,"index.html"))
    res.render("animals")

})


module.exports = router;