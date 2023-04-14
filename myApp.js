let express = require('express');
let app = express();
require('dotenv').config()
// console.log("Hello World")

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

//Serve JSON on a Specific Route //Use the .env File
app.get("/json", function(req, res) {
         process.env.MESSAGE_STYLE;
         res.json(process.env.MESSAGE_STYLE ? {"message": "HELLO JSON"} : {"message": "Hello json"})
     })





































 module.exports = app;
