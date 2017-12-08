var config = require('config'),
smtpConfig = config.get('smtpConfig'),
commonconfig = config.get('common');

var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport(smtpConfig);

"use strict";
let mailOptions = {
from: commonconfig.smtpSenderID,
to: commonconfig.smtpReceiverID,
subject: 'Test Email Subject',
html: '<html><body><p>TEST EMAIL BODY</p></body></html>'
};



/*
var transporter = nodemailer.createTransport({
    host: 'smtp.ap.jnj.com',
    port: 25,
    secure: false,
    ignoreTLS:true,
    tls : {
        rejectUnauthorized :false,
        ciphers: 'SSLv3'
    }
});
*/


/*
var transporter = nodemailer.createTransport({
    "service":"Zoho",
    "host": "smtp.zoho.com",
    "port": 587,
    "secure": false,
    "ignoreTLS":true,
    "requireTLS":false,
    "auth": {
        "user": "babygalaxy.dev@zoho.com",
        "pass": "galaxy11!!"
    }
});
*/

transporter.sendMail(mailOptions, function(error, info) {
if (error) {
    console.log('Sending Email Error: ' + error);
} else {
    console.log('Email sent: ' + info.response);
}
});

