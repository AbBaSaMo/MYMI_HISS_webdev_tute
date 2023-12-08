const express = require('express');
const routes = require('routes');

// get .env contents and add them to the global 'process' object
require('dotenv').config();

// create the express app
const app = express();

// get incoming HTML requests with JSON and add it to req.body
app.use(express.json())

// setup our routes
app.use('/', routes);

// start listening to the apps port
app.listen(process.env.PORT, () => {})