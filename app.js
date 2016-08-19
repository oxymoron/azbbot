/* jshint node: true, devel: true */
'use strict';

const 
  bodyParser = require('body-parser'),
  config = require('config'),
  express = require('express'),
  crypto = require('crypto'),
  request = require('request');
const {APP_SECRET, VALIDATION_TOKEN, PAGE_ACCESS_TOKEN, SERVER_URL} = require('./constants');

var app = express();
app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ verify: verifyRequestSignature }));
app.use(express.static('public'));
app.use(require('./controllers'));


if (!(APP_SECRET && VALIDATION_TOKEN && PAGE_ACCESS_TOKEN && SERVER_URL)) {
  console.error("Missing config values");
  process.exit(1);
}

function verifyRequestSignature(req, res, buf) {
  var signature = req.headers["x-hub-signature"];
  if (!signature) {
    console.error("Couldn't validate the signature.");
  } else {
    var elements = signature.split('=');
    var signatureHash = elements[1];
    var expectedHash = crypto.createHmac('sha1', APP_SECRET).update(buf).digest('hex');
    if (signatureHash != expectedHash) {
      throw new Error("Couldn't validate the request signature.");
    }
  }
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;

