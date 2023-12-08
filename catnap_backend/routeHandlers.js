const sendgridMail = require('@sendgrid/mail');
// sendgridMail.setApiKey(process.env.SENDGRID_KEY);
sendgridMail.setApiKey("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");


// our route handler for sending an email
// obtained from https://www.twilio.com/blog/email-contact-form-sendgrid-node-js
const emailSender = (req, res) => {
    // get the content of the submitted request
    const {
        email,
        message,
        name
    } = req.body;

    console.log('in here')

    // build the email we are going to send
    const emailContents = {
        to: process.env.SENDGRID_AUTHENTICATED_EMAIL,
        from: process.env.SENDGRID_AUTHENTICATED_EMAI,
        replyTo: email,
        subject: 'Catnap contact form',
        text: `${message}\nfrom ${name}`
    }

    // send the email and respond to the frontend based on its success
    try {
        sendgridMail.send(emailContents);
        res.status(200).send("email sent");
    } catch (error) {
        res.status(400).send("could not send email");
    }
}

// let the handlers be accessible by other files that import it
module.exports = {
    emailSender
};