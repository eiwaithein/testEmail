var config = require('config'),
    smtpConfig = config.get('smtpConfig'),
    commonconfig = config.get('common');

var nodemailer = require('nodemailer');


"use strict";
let mailOptions = {
    from: commonconfig.smtpSenderID,
    to: commonconfig.smtpReceiverID,
    subject: 'Test Email Subject',
    html: '<html><body><p>TEST EMAIL BODY</p></body></html>'
};

var transporter = nodemailer.createTransport(smtpConfig);
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log('Sending Email Error: ' + error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

