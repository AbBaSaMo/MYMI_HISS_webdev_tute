const sendgridMail = require('@sendgrid/mail');
sendgridMail.setApiKey(process.env.SENDGRID_KEY);

// our route handler for sending an email
// obtained from https://www.twilio.com/blog/email-contact-form-sendgrid-node-js
const emailSender = (req, res) => {
    const {
        email,
        message,
        name
    } = req.body;

    const emailContents = {
        to: process.env.SENDGRID_AUTHENTICATED_EMAIL,
        from: process.env.SENDGRID_AUTHENTICATED_EMAI,
        replyTo: email,
        subject: 'Catnap contact form',
        text: `${message}\nfrom ${name}`
    }

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