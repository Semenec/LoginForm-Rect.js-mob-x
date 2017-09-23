var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello word')
})

app.post('/login', (req, res) => {
  if(req.body.Username === 'User' && req.body.Password === 'Password') {
    res.send(JSON.stringify({ Auth: "Logged", Language: "EN" }));
  } else {
    res.send(JSON.stringify({ Auth: "Denied" }));
  }
})

app.listen(8080, () => {
  console.log('server started');
})
