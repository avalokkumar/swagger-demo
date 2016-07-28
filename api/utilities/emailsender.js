var MailSender = function(mailInfo){
    var nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

    // setup e-mail data with unicode symbols
    var mailOptions = {
            from: mailInfo.from, // sender address
            to: mailInfo.to, // list of receivers
            subject: mailInfo.subject, // Subject line
            text: mailInfo.text, // plaintext body
            html: mailInfo.html
    };
    // send mail with defined transport object
    sendEmail = function(){
        transporter.sendMail(this.mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });
    }
}

module.exports = function(mailInfo){
    var emailSender = new MailSender(mailInfo);
    
    return emailSender;
};