'use strict';

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var cors = require('cors')

app.use(cors())

var bodyParser = require('body-parser')

app.use(bodyParser.json())

const nodemailer = require('nodemailer');

require('dotenv').config()

app.listen(port);

app.route('/send').post((req, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: process.env.USER,
          pass: process.env.PASSWORD
      }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: req.body.mail, // sender address
      to: process.env.TO, // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.name + '->  ' + req.body.text, // plain text body
  };

  // send mail with defined transport object
  // transporter.sendMail(mailOptions, (error, info) => {
  //   console.log('---------------------------------------');
  //   console.log('MAIL: ', req.body.mail);
  //   console.log('SUBJECT: ', req.body.subject);
  //   console.log('TEXT: ', req.body.text);
  //   console.log('Message sent: %s', info.messageId);
  // });
  res.send()
})

console.log('RESTful API server started on: ' + port);
console.log('---------------------------------------');
console.log('HOST: ' + process.env.HOST);
console.log('USER: ' + process.env.USER);
console.log('TO: ' + process.env.TO);
