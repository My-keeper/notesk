// const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey= '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'

// sgMail.setApiKey(sendgridAPIKey)

// // // const msg = {
// // //     to : "arsmohamed@outlook.com",
// // //     from : "arsmohamed@mun.ca",
// // //     subject: 'Sending with Twilio SendGrid is Fun',
// // //     text: 'A7a it is working ',
// // //     html: '<strong>A7a it is working</strong>',
// // //   };
// //   sgMail
// //   .send({
// //     to : "arsmohamed@outlook.com",
// //     from : "arsmohamed@mun.ca",
// //     subject: 'Sending with Twilio SendGrid is Fun',
// //     text: 'A7a it is working ',
// //     html: '<strong>A7a it is working</strong>',
// //   }) 

// const sendWelcomeEmail = (email, firstName,lastName ) => {
//     sgMail.send({
//         to: email,
//         from: 'arsmohamed@mun.ca',
//         subject: 'Thanks for joining in!',
//         text: `Welcome to the app, ${firstName} ${lastName}. Let me know how you get along with the app.`
//     })
//         // .then(() => {}, error => {
//         //     console.error(error);

//         //     if (error.response) {
//         //     console.error(error.response.body)
//         //     }
//         // }); 
// }

// module.exports = {
//     sendWelcomeEmail
// }