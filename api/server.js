'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var cors = require('cors')

app.use(cors())

var bodyParser = require('body-parser')

app.use(bodyParser.json())

const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

console.log(process.env.PORT)
if(process.env.NODE_ENV === 'dev'){
  require('dotenv').config({path: './.dev.env'})
}
if(process.env.NODE_ENV === 'prod'){
  require('dotenv').config({path: './.prod.env'})
}

app.listen(port);

app.route('/send').post((req, res) => {
  // create reusable transporter object using the default SMTP transport
  let envelope = {
    debug: true,
    host: process.env.HOST,
    port: 465,
    secure: true, // SSL=true
    auth: {
        type: 'OAuth2',
        user: process.env.USER,
        pass: process.env.PASSWORD,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
        expires: 1484314697598
    }
  };
  console.log(envelope);
  let transporter = nodemailer.createTransport(smtpTransport(envelope));

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.mail, // sender address
      to: process.env.TO, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.name + '->  ' + req.body.text, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
     if(error) {
        console.log(error)
     }
     console.log('---------------------------------------');
     console.log('MAIL: ', req.body.mail);
     console.log('SUBJECT: ', req.body.subject);
     console.log('TEXT: ', mailOptions.text);
  });
  res.send()
})

console.log('RESTful API server started on: ' + port);
console.log('---------------------------------------');
console.log('HOST: ' + process.env.HOST);
console.log('USER: ' + process.env.USER);
console.log('TO: ' + process.env.TO);
