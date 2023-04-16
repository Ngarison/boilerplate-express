let express = require('express');
let app = express();
require('dotenv').config()
process.env.MESSAGE_STYLE="uppercase";
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
// app.get("/json", function(req, res) {
    
//     let messageStyle=process.env.MESSAGE_STYLE;
//     console.log(messageStyle)
//          if(messageStyle.includes("uppercase")){
//             message={"message": "HELLO JSON"};
//          }else{
//             message={"message": "Hello json"};
//          }
//          res.json(message);
//      })

// const message = "Hello json";
// app.get("/json", 
//     (req, res) => res.json({"message": process.env.MESSAGE_STYLE === "uppercase" ? message.toUpperCase() : message})
// );

//Implement a Root-Level Request Logger Middleware
// app.use(function(req, res, next){
//     console.log(req.method+" "+req.path+" - "+req.ip);
//     next();

// })


//Chain Middleware to Create a Time Server//As side effect
// app.get('/now', function(req, res, next) {
//     req.time = new Date().toString();  // Hypothetical synchronous operation
//     next();
//   }, function(req, res) {
//     res.json({time: req.time})
//   });


//Get Route Parameter Input from the Client
// app.get("/:word/echo", function(req, res){
//     var word=req.params.word;
//     res.json({echo:word});
// })

//Get Query Parameter Input from the Client
app.route('/name').get(function(req, res){
    let first=req.query.first;
    let last=req.query.last;
    res.send({name:first+' '+last});
}).post();




































 module.exports = app;
