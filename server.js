var express = require('express');
var app = express();
var fs = require('fs');

let buff = fs.readFileSync('./imagenesGenerales/imagen1.jpg');
let imagen1 = buff.toString('base64');
let buff2 = fs.readFileSync('./imagenesGenerales/imagen2.jpg');
let imagen2 = buff2.toString('base64');
let buff3 = fs.readFileSync('./imagenesGenerales/imagen3.jpg');
let imagen3 = buff3.toString('base64');
let buff4 = fs.readFileSync('./imagenesGenerales/imagen4.jpg');
let imagen4 = buff4.toString('base64');
let buff5 = fs.readFileSync('./imagenesGenerales/imagen5.jpg');
let imagen5 = buff5.toString('base64');

let buff00 = fs.readFileSync('./imagenesGenerales/imagenes1/imagen00.jpg');
let imagen00 = buff00.toString('base64');
let buff01 = fs.readFileSync('./imagenesGenerales/imagenes1/imagen01.jpg');
let imagen01 = buff01.toString('base64');
let buff02 = fs.readFileSync('./imagenesGenerales/imagenes1/imagen02.jpg');
let imagen02 = buff02.toString('base64');
let buff03 = fs.readFileSync('./imagenesGenerales/imagenes1/imagen03.jpg');
let imagen03 = buff03.toString('base64');

let buff10 = fs.readFileSync('./imagenesGenerales/imagenes2/imagen10.jpg');
let imagen10 = buff10.toString('base64');
let buff11 = fs.readFileSync('./imagenesGenerales/imagenes2/imagen11.jpg');
let imagen11 = buff11.toString('base64');
let buff12 = fs.readFileSync('./imagenesGenerales/imagenes2/imagen12.jpg');
let imagen12 = buff12.toString('base64');
let buff13 = fs.readFileSync('./imagenesGenerales/imagenes2/imagen13.jpg');
let imagen13 = buff13.toString('base64');

let buff20 = fs.readFileSync('./imagenesGenerales/imagenes3/imagen20.jpg');
let imagen20 = buff20.toString('base64');
let buff21 = fs.readFileSync('./imagenesGenerales/imagenes3/imagen21.jpg');
let imagen21 = buff21.toString('base64');
let buff22= fs.readFileSync('./imagenesGenerales/imagenes3/imagen22.jpg');
let imagen22 = buff22.toString('base64');


let buff30 = fs.readFileSync('./imagenesGenerales/imagenes4/imagen30.jpg');
let imagen30 = buff30.toString('base64');
let buff31 = fs.readFileSync('./imagenesGenerales/imagenes4/imagen31.jpg');
let imagen31 = buff31.toString('base64');
let buff32 = fs.readFileSync('./imagenesGenerales/imagenes4/imagen32.jpg');
let imagen32 = buff32.toString('base64');
let buff33 = fs.readFileSync('./imagenesGenerales/imagenes4/imagen33.jpg');
let imagen33 = buff33.toString('base64');

let buff40 = fs.readFileSync('./imagenesGenerales/imagenes5/imagen40.jpg');
let imagen40 = buff40.toString('base64');
let buff41 = fs.readFileSync('./imagenesGenerales/imagenes5/imagen41.jpg');
let imagen41 = buff41.toString('base64');
let buff42 = fs.readFileSync('./imagenesGenerales/imagenes5/imagen42.jpg');
let imagen42 = buff42.toString('base64');
let buff43 = fs.readFileSync('./imagenesGenerales/imagenes5/imagen43.jpg');
let imagen43 = buff43.toString('base64');
let buff44 = fs.readFileSync('./imagenesGenerales/imagenes5/imagen44.jpg');
let imagen44 = buff44.toString('base64');
let buff45 = fs.readFileSync('./imagenesGenerales/imagenes5/imagen45.jpg');
let imagen45 = buff45.toString('base64');

let files;

function leer(path){
  var i=0;
  try {
    files = fs.readdirSync(path);
    files.forEach(element =>{
    if((element.substring(element.length,element.length - 3))=="jpg"){
      i++;
    }});
  } catch(err) {
  // An error occurred
  console.error(err);
  }
  return i;
}

var distance = require('google-distance-matrix');
distance.key('AIzaSyBREvDnnimfoMMfXQHYuerVt6HucSQZFW4');

var origins = ['San Francisco CA', '40.7421,-73.9914'];
var destinations = ['New York NY', 'Montreal', '41.8337329,-87.7321554', 'Honolulu'];

distance.units('metric');

distance.matrix(origins, destinations, function (err, distances) {
    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status == 'OK') {
        for (var i=0; i < origins.length; i++) {
            for (var j = 0; j < destinations.length; j++) {
                var origin = distances.origin_addresses[i];
                var destination = distances.destination_addresses[j];
                if (distances.rows[0].elements[j].status == 'OK') {
                    var distance = distances.rows[i].elements[j].distance.text;
                    console.log('Distance from ' + origin + ' to ' + destination + ' is ' + distance);
                } else {
                    console.log(destination + ' is not reachable by land from ' + origin);
                }
            }
        }
    }
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/imagen0', function (req, res){
  res.send(leer("./imagenesGenerales").toString());
  console.log("----"+leer("./imagenesGenerales"));
});
app.get('/imagen1', function (req, res){
  res.send(imagen1);
});
app.get('/imagen2', function (req, res){
  res.send(imagen2);
});
app.get('/imagen3', function (req, res){
  res.send(imagen3);
});
app.get('/imagen4', function (req, res){
  res.send(imagen4);
});
app.get('/imagen5', function (req, res){
  res.send(imagen5);
});
app.get('/imagenes0', function (req, res){
  res.send(leer("./imagenesGenerales/imagenes1").toString());
  console.log("----"+leer("./imagenesGenerales/imagenes1"));
});
app.get('/imagenes1', function (req, res){
  res.send(leer("./imagenesGenerales/imagenes2").toString());
  console.log("----"+leer("./imagenesGenerales/imagenes2"));
});
app.get('/imagenes2', function (req, res){
  res.send(leer("./imagenesGenerales/imagenes3").toString());
  console.log("----"+leer("./imagenesGenerales/imagenes3"));
});
app.get('/imagenes3', function (req, res){
  res.send(leer("./imagenesGenerales/imagenes4").toString());
  console.log("----"+leer("./imagenesGenerales/imagenes4"));
});
app.get('/imagenes4', function (req, res){
  res.send(leer("./imagenesGenerales/imagenes5").toString());
  console.log("----"+leer("./imagenesGenerales/imagenes5"));
});
app.get('/imagen00', function (req, res){
  res.send(imagen00);
});
app.get('/imagen01', function (req, res){
  res.send(imagen01);
});
app.get('/imagen02', function (req, res){
  res.send(imagen02);
});
app.get('/imagen03', function (req, res){
  res.send(imagen03);
});
app.get('/imagen10', function (req, res){
  res.send(imagen10);
});
app.get('/imagen11', function (req, res){
  res.send(imagen11);
});
app.get('/imagen12', function (req, res){
  res.send(imagen12);
});
app.get('/imagen13', function (req, res){
  res.send(imagen13);
});
app.get('/imagen20', function (req, res){
  res.send(imagen20);
});
app.get('/imagen21', function (req, res){
  res.send(imagen21);
});
app.get('/imagen22', function (req, res){
  res.send(imagen22);
});
app.get('/imagen30', function (req, res){
  res.send(imagen30);
});
app.get('/imagen31', function (req, res){
  res.send(imagen31);
});
app.get('/imagen32', function (req, res){
  res.send(imagen32);
});
app.get('/imagen33', function (req, res){
  res.send(imagen33);
});
app.get('/imagen40', function (req, res){
  res.send(imagen40);
});
app.get('/imagen41', function (req, res){
  res.send(imagen41);
});
app.get('/imagen42', function (req, res){
  res.send(imagen42);
});
app.get('/imagen43', function (req, res){
  res.send(imagen43);
});
app.get('/imagen44', function (req, res){
  res.send(imagen44);
});
app.get('/imagen45', function (req, res){
  res.send(imagen45);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
