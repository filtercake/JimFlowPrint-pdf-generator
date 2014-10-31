var express = require('express');
var app = express();
app.set('view engine', 'jade');



app.set('views', process.cwd() + '/prototypes');
app.use(express.static(__dirname + '/prototypes'));


app.get('/:prototype', function (req, res) {
  var prototype = req.params.prototype;
  res.render( prototype + '/index', {
    ticket: req.query
  });
});



exports.app = app;