const sgMail = require('@sendgrid/mail')

const sendgridAPIKey= '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'
// const nodemailer = require('nodemailer');
// const sendgridTransport = require('nodemailer-sendgrid-transport')

sgMail.setApiKey(sendgridAPIKey)

// const msg = {
//     to : "arsmohamed@mun.ca",
//     from : "arsmohamed@outlook.com",
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'A7a it is working ',
//     html: '<strong>A7a it is working</strong>',
//   };
//   sgMail
//   .send({
//     to : "arsmohamed@mun.ca",
//     from : "kirito21596@gmail.com",
//     subject: 'Sending with Twilio SendGrid is Fun',
//     text: 'A7a it is working ',
//     html: '<strong>A7a it is working</strong>',
//   }) .then((res) => console.log(res))
//   .catch((e) => console.log(e))

const sendWelcomeEmail = (email, firstName,lastName ) => {
    console.log(email, firstName,lastName)
    sgMail.send({
        to: email,
        from: 'kirito21596@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, "${firstName} ${lastName}". Let me know how you get along with the app.`,
        html: '<strong>A7a it is working</strong>',
    })
        // .then(() => {}, error => {
        //     console.error(error);

        //     if (error.response) {
        //     console.error(error.response.body)
        //     }
        // }); 
}

module.exports = {
    sendWelcomeEmail
}