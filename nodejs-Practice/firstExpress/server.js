
var express = require("express");
const config = require('./config').config;
var app = express();
//for import image
//app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public/images'));


//listen port from config
app.listen(config.port, () => { 
    console.log(`listening for request on port ${config.port}`); 
});
 

app.get("/", function (req, res) {
    console.log("Home page POST request");
    res.sendFile(__dirname + '/index.html');

});
 //  /list_user page Get
 app.get('/list_user', function (req, res) {
    console.log("/list_user GET request");
    res.send('User Page list');
 });


/*
app.get('/process_get', function (req, res) {
 
    // output JASON type
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
*/
