const nodemailer = require('nodemailer');

  //fake mail server for development purpose
/* let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: '832c8b07c8295e',
       pass: 'ecedaa8015ec1c'
    }
});  */
 

/* //Sample message with attachment
const message = {
    from: 'elonmusk@tesla.com',
    to: 'to@email.com',
    subject: 'Design Your Model S | Tesla',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',
    attachments: [
        { // Use a URL as an attachment
          filename: 'your-testla.png',
          path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
      }
    ]
}; */
/* //simple email message
const message = {
    from: 'elonmusk@tesla.com', // Sender address
    to: 'to@email.com',         // List of recipients
    subject: 'Design Your Model S | Tesla', // Subject line
    text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
};
 */
 
async function sendEmail(message) {
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
          return err;
        } else {
          console.log(info);
          return info;
        }
    });
    
}

async function sendEmailWithAttachment(message) {
    transport.sendMail(message, function (err, info) {
        if (err) {
            console.log(err)
            return err;
          } else {
            console.log(info);
            return info;
          }
     });
    
}


module.exports = {
    sendEmail,
    sendEmailWithAttachment
};
