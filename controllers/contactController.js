var nodemailer = require('nodemailer');

module.exports = {
  sendMail: function(req, res) {
      console.log("REACHED THE CONTACT CONTROLLER");
      var subject = "A new message from " + req.body.name + " (" + req.body.emailId +")";
      var from = req.body.emailId;
      var message = req.body.message;
      var messageToSender = "Dear " + req.body.name + ",\nI've received your message and would like to thank you for contacting me.\nYou will be hearing from me soon.\nHave a great day ahead!\n\nRegards,\nSisir DK";

      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.USR_NAME, //Your username here
          pass: process.env.USR_PW //your password here
        }
      });

      var mailDataToMe = {
        from: from,
        to: process.env.USR_NAME, //You username here
        subject: subject,
        text: message
      };

      var mailDataToSender = {
        from: process.env.USR_NAME, //You username here
        to: from,
        subject: 'Thank you for contacting me!',
        text: messageToSender
      };

      transporter.sendMail(mailDataToMe, function(error, info) {
        if(error) {
          res.json( {status: 'error'} );
        } else {
          transporter.sendMail(mailDataToSender, function(error, info) {
            if(error) {
              console.log('An error occured while mailing', error);
            } else {
              console.log('Message sent: ' + info.response);
            }
          });
          res.json( {status: info.response} );
        }
      });
  }
};
