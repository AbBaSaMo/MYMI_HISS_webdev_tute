const express = require('express');
const { emailSender } = require('routeHandlers');

// create our router
const router = express.Router();

// for post request to /send-email, run emailSender
router.post('send-email', emailSender);

// let the router be accessible by other files that import it
module.exports = router;