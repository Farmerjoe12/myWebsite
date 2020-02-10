let nodeMailer = require('nodemailer')

module.exports = sendEmailFromForm = (toName, toEmail, message) => {
    let transporter = nodeMailer.createTransport({
        service: global.gConfig.email_config.service,
        auth: global.gConfig.email_config.auth
    });

    let html = "<h2>" + toName + " just sent a message via Adam's website</h2>";
    html    += "<p>" + message + "</p>";

    // in the future the sender would probably come from a dedicated server email?
    const mailOptions = {
        from: global.gConfig.email_config.auth.user,
        to: 'adamfarmelo@gmail.com, ' + toEmail,
        subject: "Form submitted on Adam's website.",
        html: html
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(info);
        }
    });
}