let express = require('express');
let app = express();
console.log("Hello World")

//Start a Working Express Server
// app.get("/", function(req, res) {
//     res.send('Hello Express');
// })

//Serve an HTML File
app.get("/", function(req, res) {
    var absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath)
})

//Serve Static Assets
app.use(express.static(__dirname +"/public"));




































 module.exports = app;
