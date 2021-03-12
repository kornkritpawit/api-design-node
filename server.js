// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var fs = require('fs')
var express = require('express');
const { json } = require('body-parser');

var app = express()

var jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
  fs.readFile('index.html', (err, data)=> {
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write(data);
    var html = data.toString();
    res.setHeader('Content-Type', 'text/html');
    res.send(html);

    // console.log(data)
    // res.send(data);
  })
})

app.get('/data', (req, res)=> {
  // res.json(jsonData);
  res.send(jsonData)
})

// app.listen(3000)


// app.get('/', function(req, res){
//   // res.sendFile takes an absolute path to a file and
//   // sets the mime type based n the file extname
//   res.sendFile(__dirname + '/index.html', function(err) {
//     if (err) {
//       res.status(500).send(err);
//     }
//   })
// });

// app.get('/data', function(req, res) {
//   res.json(jsonData);
// });


var port = 3000;
app.listen(port, function(){
  console.log('listening on http://localhost:', port);
});