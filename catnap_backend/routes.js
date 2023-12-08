const express = require('express');
const { emailSender } = require('routeHandlers');

// create our router
const router = express.Router();

// post request to /send-email
router.post('send-email', emailSender);
