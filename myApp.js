let express = require('express');
let app = express();
console.log("Hello World")

//Start a Working Express Server
// app.get("/", function(req, res) {
//     res.send('Hello Express');
// })

//Serve an HTML File
// app.get("/", function(req, res) {
//     var absolutePath = __dirname + '/views/index.html'
//     res.sendFile(absolutePath)
// })

//Serve Static Assets
// app.use("/public",express.static(__dirname +"/public"));

//Serve JSON on a Specific Route
app.get("/json", function(req, res) {
         var data = {"message": "Hello json"};
         res.json(data)
     })




































 module.exports = app;
