const express = require('express');
const routes = require('./routes');
const cors = require('cors');

// get .env contents and add them to the global 'process' object
require('dotenv').config();

// create the express app
const app = express();

// get incoming HTML requests with JSON and add it to req.body
app.use(express.json())
app.use(cors())

// setup our routes
app.use('/api', routes);
app.use((req, res, next) => {
    console.info(req.path);
    next();
})

// start listening to the apps port
app.listen(process.env.PORT, () => {
    console.info('listening on port ' + process.env.PORT);
})