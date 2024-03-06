var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
require('./db')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
const route = require('./Routes/routes')

// parse application/json
app.use(bodyParser.json())

app.use('/api', route);

app.listen('8000', (req, res) => {
    console.log('Server port 8000');
})